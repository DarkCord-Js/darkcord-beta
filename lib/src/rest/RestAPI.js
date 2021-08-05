"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PayLoads_1 = require("../constants/PayLoads");
const Constants_1 = require("../constants/Constants");
const Fetch_1 = tslib_1.__importDefault(require("./Fetch"));
class RestAPI {
    bot;
    _token = '';
    fetch;
    requestHandler;
    constructor(bot) {
        this.bot = bot;
        this._token = '';
        this.fetch = new Fetch_1.default(this.bot);
        this.requestHandler = this.bot.requestHandler;
    }
    async createMessage(options, id) {
        return await this.requestHandler('POST', `${Constants_1.EndPoints.channels}/${id}/${Constants_1.EndPoints.messages}`, options);
    }
    async deleteMessage(channelId, messageId) {
        return await this.requestHandler('POST', `${Constants_1.EndPoints.channels}/${channelId}/${Constants_1.EndPoints.messages}/${messageId}`);
    }
    async createChannel(guildId, options) {
        return await this.requestHandler('POST', `${Constants_1.EndPoints.guilds}/${guildId}/${Constants_1.EndPoints.channels}`, options);
    }
    async deleteChannel(channelId, reason) {
        return await this.requestHandler('DELETE', `${Constants_1.Constants.API}/${Constants_1.EndPoints.channels}`, { reason });
    }
    async editMessage(options, channelId, messageId) {
        return await this.requestHandler('POST', `${Constants_1.EndPoints.channels}/${channelId}/${Constants_1.EndPoints.messages}/${messageId}`, options);
    }
    async createGuildEmoji(guildId, options) {
        return await this.requestHandler('POST', `${Constants_1.EndPoints.guilds}/${guildId}/${Constants_1.EndPoints.emojis}`, options);
    }
    async deleteGuildEmoji(guildId, emojiId, reason) {
        return await this.requestHandler('DELETE', `${Constants_1.EndPoints.guilds}/${guildId}/${Constants_1.EndPoints.emojis}/${emojiId}`, { reason });
    }
    async banMember(guildId, memberId, days, reason) {
        return await this.requestHandler('PUT', `${Constants_1.EndPoints.guilds}/${guildId}/bans/${memberId}`, {
            delete_message_days: days,
            reason
        });
    }
    set token(token) {
        this._token = token;
        PayLoads_1.headers.Authorization = `Bot ${this._token}`;
    }
}
exports.default = RestAPI;
