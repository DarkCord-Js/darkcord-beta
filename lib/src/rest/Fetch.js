"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../constants/Constants");
class Fetch {
    bot;
    constructor(bot) {
        this.bot = bot;
    }
    async user(id) {
        return this.bot.requestHandler('GET', `${Constants_1.EndPoints.users}/${id}`);
    }
    async message(channelId, messageId) {
        return this.bot.requestHandler('GET', `${Constants_1.EndPoints.channels}/${channelId}/${Constants_1.EndPoints.messages}/${messageId}`);
    }
    async member(guildId, memberId) {
        return this.bot.requestHandler('GET', `${Constants_1.EndPoints.guilds}/${guildId}/${Constants_1.EndPoints.members}/${memberId}`);
    }
    async channel(id) {
        return this.bot.requestHandler('GET', `${Constants_1.EndPoints.channels}/${id}`);
    }
    async guild(id) {
        return this.bot.requestHandler('GET', `${Constants_1.EndPoints.guilds}/${id}?with_counts=true`);
    }
    async guilds() {
        return this.bot.requestHandler('GET', `${Constants_1.EndPoints.guilds}`);
    }
    async guildChannels(id) {
        return this.bot.requestHandler('GET', `${Constants_1.EndPoints.guilds}/${id}/${Constants_1.EndPoints.channels}`);
    }
    async guildMembers(id, max) {
        return this.bot.requestHandler('GET', `${Constants_1.EndPoints.guilds}/${id}/${Constants_1.EndPoints.members}?limit=${max}`);
    }
}
exports.default = Fetch;
