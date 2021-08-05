"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseChannel_1 = tslib_1.__importDefault(require("./BaseChannel"));
const Constants_1 = require("../../constants/Constants");
const Resolve_1 = tslib_1.__importDefault(require("../../util/Resolve"));
class GuildChannel extends BaseChannel_1.default {
    _lastMessageId;
    _lastPinTimestamp;
    _position;
    _parentId;
    _topic;
    _guild;
    _permissionOverwrites;
    _nsfw;
    _rateLimitPerUser;
    constructor(_id, _bot, _type, _name, _lastMessageId, _lastPinTimestamp, _position, _parentId, _topic, _guild, _permissionOverwrites, _nsfw, _rateLimitPerUser) {
        super(_bot, _id, _name, _type);
        this._lastMessageId = _lastMessageId;
        this._lastPinTimestamp = _lastPinTimestamp;
        this._position = _position;
        this._parentId = _parentId;
        this._topic = _topic;
        this._guild = _guild;
        this._permissionOverwrites = _permissionOverwrites;
        this._nsfw = _nsfw;
        this._rateLimitPerUser = _rateLimitPerUser;
        return this;
    }
    get lastPinTimestamp() {
        return this._lastPinTimestamp;
    }
    get position() {
        return this._position;
    }
    get parentId() {
        return this._parentId;
    }
    get topic() {
        return this._topic;
    }
    get guild() {
        return this._guild;
    }
    get nsfw() {
        return this._nsfw;
    }
    get permissionOverwrites() {
        return this._permissionOverwrites;
    }
    get lastMessageId() {
        return this._lastMessageId;
    }
    get rateLimitPerUser() {
        return this._rateLimitPerUser;
    }
    set rateLimitPerUser(rate) {
        this._rateLimitPerUser = rate;
    }
    async delete(timeout) {
        if ('timeout' in timeout) {
            setTimeout(() => {
                this.delete();
            }, timeout.timeout);
        }
        else {
            await this.bot.requestHandler('DELETE', `${Constants_1.EndPoints.channels}/${this.id}`);
        }
    }
    async createInvite(options) {
        const optionsResolvable = {
            max_age: options?.maxAge,
            mas_uses: options?.maxUses,
            unique: options?.unique,
            temporary: options?.temporary
        };
        const res = await this.bot.requestHandler('POST', `${Constants_1.EndPoints.channels}/${this.id}/${Constants_1.EndPoints.invites}`, optionsResolvable);
        const resolve = new Resolve_1.default(this.bot);
        const channel = await resolve.resolveChannel(await this.bot.rest.fetch.channel(this.id));
        const invite = {
            code: res.code,
            approximatePresenceCount: res.approximate_presence_count,
            approximateMemberCount: res.approximate_member_count,
            inviter: resolve.resolveUser(res.inviter),
            channel
        };
        return invite;
    }
}
exports.default = GuildChannel;
