"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const events_1 = tslib_1.__importDefault(require("events"));
const RestAPI_1 = tslib_1.__importDefault(require("./rest/RestAPI"));
const WebSocket_1 = tslib_1.__importDefault(require("./ws/WebSocket"));
const Events_1 = require("./constants/Events");
const Intents_1 = tslib_1.__importDefault(require("./util/Intents"));
const Collection_1 = tslib_1.__importDefault(require("./collection/Collection"));
const CacheManager_1 = tslib_1.__importDefault(require("./structures/cache/CacheManager"));
const Resolve_1 = tslib_1.__importDefault(require("./util/Resolve"));
const Loader_1 = require("./structures/Loader");
/** DarkCord Client */
class Client extends events_1.default {
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
    commands;
    socket;
    constructor(_options) {
        super();
        this._options = _options;
        this.users = new Collection_1.default();
        this.guilds = new Collection_1.default();
        this.emojis = new Collection_1.default();
        this.channels = new Collection_1.default();
        this.commands = new Collection_1.default();
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
        this.rest = new RestAPI_1.default(this);
        this.socket = new WebSocket_1.default(this);
        this.token = this.options?.token ?? '';
        this.startedAt = null;
    }
    /** Connect bot to Discord API */
    async login(token = this.token) {
        if (!token)
            throw new Error('Invalid token.');
        this.token = token = token.replace(/^(Bot|Bearer)/i, '');
        this.rest.token = token;
        this.emit(Events_1.Events.DEBUG, `Token: ${this.token}`);
        await this.socket.connect(this.options.shardCount || 0);
        this.startedAt = Date.now();
        return this;
    }
    /** Get bot uptime */
    get uptime() {
        return this.startedAt ? Date.now() - this.startedAt : null;
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
        if (guild) {
            const guildNoResolvable = await this.rest.fetch.guild(id);
            const resolve = new Resolve_1.default(this);
            guild = resolve.resolveGuild(guildNoResolvable);
            new CacheManager_1.default(this).manage('guilds', id, guild);
        }
        return guild;
    }
    /** Load commands */
    async commandLoader(path) {
        return await Loader_1.CommandLoader(this, path);
    }
    /** Load Events */
    async eventLoader(path) {
        return await Loader_1.EventLoader(this, path);
    }
    on(event, listener) {
        super.on(event, listener);
        return this;
    }
}
exports.default = Client;
