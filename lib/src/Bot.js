"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const events_1 = tslib_1.__importDefault(require("events"));
const RestAPI_1 = tslib_1.__importDefault(require("./rest/RestAPI"));
const WebSocket_1 = tslib_1.__importDefault(require("./ws/WebSocket"));
const Events_1 = require("./constants/Events");
const Intents_1 = tslib_1.__importDefault(require("./util/Intents"));
const Collection_1 = tslib_1.__importDefault(require("./collection/Collection"));
const CacheManager_1 = tslib_1.__importDefault(require("./managers/CacheManager"));
const Resolve_1 = tslib_1.__importDefault(require("./util/Resolve"));
const RequestHandler_1 = tslib_1.__importDefault(require("./handler/RequestHandler"));
const PayLoads_1 = require("./constants/PayLoads");
const PluginsManager_1 = tslib_1.__importDefault(require("./managers/PluginsManager"));
const Constants_1 = require("./constants/Constants");
const LavaLink_1 = tslib_1.__importDefault(require("./voice/LavaLink"));
/** DarkCord Bot */
class Bot extends events_1.default {
    _options;
    rest;
    token = '';
    startedAt;
    options;
    users;
    guilds;
    emojis;
    channels;
    user;
    socket;
    plugins;
    guildShards;
    shards;
    constructor(_options) {
        super();
        this._options = _options;
        this.users = new Collection_1.default();
        this.guilds = new Collection_1.default();
        this.emojis = new Collection_1.default();
        this.channels = new Collection_1.default();
        this.shards = new Collection_1.default();
        this.guildShards = new Collection_1.default();
        let intents = 0;
        if (this._options?.intents) {
            for (const intent of this._options?.intents) {
                if (typeof intent === 'string') {
                    if (Intents_1.default[intent]) {
                        intents |= Intents_1.default[intent];
                    }
                }
                else {
                    intents |= intent;
                }
            }
        }
        this.options = {
            token: this._options?.token,
            apiVersion: this._options?.apiVersion ?? 9,
            intents: intents,
            shardCount: this._options?.shardCount ?? 0,
            plugins: {
                limit: this._options?.plugins?.limit ?? 5,
                plugins: this._options?.plugins?.plugins || []
            },
            cache: {
                guilds: this._options?.cache?.guilds ?? true,
                users: this._options?.cache?.users ?? true,
                roles: this._options?.cache?.roles ?? true,
                channels: this._options?.cache?.channels ?? true,
                presences: this._options?.cache?.presences ?? true,
                overwrites: this._options?.cache?.overwrites ?? true,
                emojis: this._options?.cache?.emojis ?? true
            }
        };
        this.options.plugins.plugins.push({
            name: 'DarkCord Timer Plugin',
            description: 'Plugin darkcord',
            type: 'common',
            startOnReady: true,
            exec: () => {
                if (this._options?.timeCount) {
                    const P = ['\u001b[31mD', '\u001b[32mA', '\u001b[33mR', '\u001b[34mK', '\u001b[35mC', '\u001b[36mO', '\u001b[37mR', '\u001b[0mD'];
                    let x = 0;
                    let time = 250;
                    setInterval(() => {
                        time += 250;
                        const timeFormated = `${(time / 1000).toFixed()}`;
                        process.stdout.write(`\r${P[x++]} ${timeFormated} \u001b[30;1mRunning DarkCord ${require('../../package.json').version}\u001b[0m   `);
                        x %= P.length;
                    }, 250);
                }
            }
        });
        const PluginManager = new PluginsManager_1.default(this, this.options.plugins?.limit, this.options.plugins?.plugins);
        PluginManager.loadPlugins();
        this.plugins = PluginManager.plugins;
        this.rest = new RestAPI_1.default(this);
        this.socket = new WebSocket_1.default(this);
        this.token = this.options?.token ?? '';
        this.startedAt = null;
    }
    /** Connect bot to Discord API */
    async run(token = this.token) {
        if (!token)
            throw new Error('Invalid token.');
        this.token = token = token.replace(/^(Bot|Bearer)/i, '');
        this.rest.token = token;
        this.emit(Events_1.Events.DEBUG, `Token: ${this.token}`);
        PayLoads_1.headers.Authorization = `Bot ${this.token}`;
        await this.socket.connect(this.options.shardCount || 0);
        this.startedAt = Date.now();
        return this;
    }
    /** Get bot uptime */
    get uptime() {
        return this.startedAt ? Date.now() - this.startedAt : null;
    }
    /** Get bot host os */
    get os() {
        return `${process.platform}`;
    }
    lavaLink(host, port, password, options) {
        return new LavaLink_1.default(this, host, port, password, options);
    }
    /** Get discord user */
    async getUser(id) {
        let user = this.users.get(id);
        if (!user) {
            const userNoResolvable = await this.rest.fetch.user(id);
            const resolve = new Resolve_1.default(this);
            user = resolve.resolveUser(userNoResolvable);
            new CacheManager_1.default(this).manage('users', id, user);
        }
        return user;
    }
    /** Get guild member */
    async getMember(memberId, guildId) {
        const memberNoResolvable = await this.rest.fetch.member(guildId, memberId);
        const resolve = new Resolve_1.default(this);
        const member = resolve.resolveMember(memberNoResolvable, guildId);
        return member;
    }
    /** Get guild */
    async getGuild(id) {
        let guild = this.guilds.get(id);
        if (!guild) {
            const guildNoResolvable = await this.rest.fetch.guild(id);
            const resolve = new Resolve_1.default(this);
            guild = resolve.resolveGuild(guildNoResolvable);
            new CacheManager_1.default(this).manage('guilds', id, guild);
        }
        return guild;
    }
    /** Get channel */
    async getChannel(id) {
        let channel = this.channels.get(id);
        if (!channel) {
            const channelNoResolvable = await this.rest.fetch.channel(id);
            const resolve = new Resolve_1.default(this);
            channel = resolve.resolveChannel(channelNoResolvable);
            new CacheManager_1.default(this).manage('channels', id, channel);
        }
        return channel;
    }
    get slash() {
        return {
            create: {
                guild: this.createSlash,
                global: this.createGlobalSlash
            },
            delete: {
                guild: this.deleteSlash
            }
        };
    }
    async createGlobalSlash(options) {
        if (!options.type)
            options.type = 1;
        return await this.requestHandler('POST', `${Constants_1.EndPoints.applications}/${this.user.id}/${Constants_1.EndPoints.commands}`, options);
    }
    async createSlash(guildId, options) {
        if (!options.type)
            options.type = 1;
        return await this.requestHandler('POST', `${Constants_1.EndPoints.applications}/${this.user.id}/${Constants_1.EndPoints.guilds}/${guildId}/${Constants_1.EndPoints.commands}`, options);
    }
    async deleteSlash(guildId, commandId) {
        return await this.requestHandler('DELETE', `${Constants_1.EndPoints.applications}/${this.user.id}/${Constants_1.EndPoints.guilds}/${guildId}/${Constants_1.EndPoints.commands}/${commandId}`);
    }
    async getInvite(inviteCode) {
        const invite = await this.requestHandler('GET', `${Constants_1.EndPoints.invites}/${inviteCode}`);
        const resolve = new Resolve_1.default(this);
        return resolve.resolveInvite(invite);
    }
    async requestHandler(method, endpoint, data) {
        return await RequestHandler_1.default(this, PayLoads_1.headers, method, endpoint, data);
    }
    on(event, listener) {
        super.on(event, listener);
        return this;
    }
    once(event, listener) {
        super.once(event, listener);
        return this;
    }
}
exports.default = Bot;
