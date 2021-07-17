"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseChannel_1 = tslib_1.__importDefault(require("./BaseChannel"));
class GuildChannel extends BaseChannel_1.default {
    constructor(_id, _client, _type, _name, _lastMessageId, _lastPinTimestamp, _position, _parentId, _topic, _guild, _permissionOverwrites, _nsfw, _rateLimitPerUser) {
        super(_client, _id, _name, _type);
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
}
exports.default = GuildChannel;
