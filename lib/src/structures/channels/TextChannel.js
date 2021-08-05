"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const GuildChannel_1 = tslib_1.__importDefault(require("./GuildChannel"));
const Embed_1 = tslib_1.__importDefault(require("../Embed"));
const Resolve_1 = tslib_1.__importDefault(require("../../util/Resolve"));
const Collection_1 = tslib_1.__importDefault(require("../../collection/Collection"));
class TextChannel extends GuildChannel_1.default {
    _messages = new Collection_1.default();
    resolve;
    _bot;
    constructor(_id, _bot, _type, _lastMessageId, _lastPinTimestamp, _name, _position, _parentId, _topic, _guild, _permissionOverwrites, _nsfw, _rateLimitPerUser) {
        super(_id, _bot, _type, _name, _lastMessageId, _lastPinTimestamp, _position, _parentId, _topic, _guild, _permissionOverwrites, _nsfw, _rateLimitPerUser);
        this._bot = _bot;
        this.resolve = new Resolve_1.default(this.bot);
    }
    get messages() {
        return this._messages;
    }
    get bot() {
        return this._bot;
    }
    async sendMessage(content) {
        if (typeof content === 'string') {
            const body = { content };
            const res = await this.bot.rest.createMessage(body, this.id);
            res.guild_id = this.guild.id;
            return await this.resolve.resolveMessage(res);
        }
        if (content instanceof Embed_1.default) {
            const options = {
                embeds: [content]
            };
            const res = await this.bot.rest.createMessage(options, this.id);
            res.guild_id = this.guild.id;
            return await this.resolve.resolveMessage(res);
        }
        const contentResolvable = content;
        if (content.messageReference) {
            contentResolvable.message_reference = {
                guild_id: content.messageReference.guildId,
                channel_id: content.messageReference.channelId,
                message_id: content.messageReference.messageId
            };
        }
        if (content.allowedMentions) {
            contentResolvable.allowed_mentions = {
                roles: content.allowedMentions.roles,
                users: content.allowedMentions.users,
                replied_user: content.allowedMentions.repliedUser
            };
        }
        const res = await this.bot.rest.createMessage(contentResolvable, this.id);
        return await this.resolve.resolveMessage(res);
    }
}
exports.default = TextChannel;
