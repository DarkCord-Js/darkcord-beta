"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const GuildChannel_1 = tslib_1.__importDefault(require("./GuildChannel"));
const Embed_1 = tslib_1.__importDefault(require("../Embed"));
const Resolve_1 = tslib_1.__importDefault(require("../../util/Resolve"));
const Collection_1 = tslib_1.__importDefault(require("../../collection/Collection"));
class TextChannel extends GuildChannel_1.default {
    constructor(_id, _client, _type, _lastMessageId, _lastPinTimestamp, _name, _position, _parentId, _topic, _guild, _permissionOverwrites, _nsfw, _rateLimitPerUser) {
        super(_id, _client, _type, _name, _lastMessageId, _lastPinTimestamp, _position, _parentId, _topic, _guild, _permissionOverwrites, _nsfw, _rateLimitPerUser);
        this._messages = new Collection_1.default();
        this._client = _client;
        this.resolve = new Resolve_1.default(this.client);
    }
    get messages() {
        return this._messages;
    }
    get client() {
        return this._client;
    }
    async send(content) {
        if (typeof content === 'string') {
            const body = { content };
            const res = await this.client.rest.createMessage(body, this.id);
            res.guild_id = this.guild.id;
            return await this.resolve.resolveMessage(res);
        }
        if (content instanceof Embed_1.default) {
            const options = {
                embeds: [content]
            };
            const res = await this.client.rest.createMessage(options, this.id);
            res.guild_id = this.guild.id;
            return await this.resolve.resolveMessage(res);
        }
        const res = await this.client.rest.createMessage(content, this.id);
        return await this.resolve.resolveMessage(res);
    }
}
exports.default = TextChannel;
