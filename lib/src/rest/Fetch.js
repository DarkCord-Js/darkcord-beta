"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Constants_1 = require("../constants/Constants");
const PayLoads_1 = require("../constants/PayLoads");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
class Fetch {
    async user(id) {
        const res = await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.users}/${id}`, { headers: PayLoads_1.headers });
        return res.json();
    }
    async message(channelId, messageId) {
        const res = await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.channels}/${channelId}/${Constants_1.EndPoints.messages}/${messageId}`, { method: 'GET', headers: PayLoads_1.headers });
        return res.json();
    }
    async member(guildId, memberId) {
        const res = await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.guilds}/${guildId}/${Constants_1.EndPoints.members}/${memberId}`, { headers: PayLoads_1.headers });
        return res.json();
    }
    async channel(id) {
        const res = await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.channels}/${id}`, { headers: PayLoads_1.headers });
        return res.json();
    }
    async guild(id) {
        const res = await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.guilds}/${id}?with_counts=true`, { headers: PayLoads_1.headers });
        return res.json();
    }
    async guilds() {
        const res = await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.guilds}`, { headers: PayLoads_1.headers });
        return res.json();
    }
    async guildChannels(id) {
        const res = await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.guilds}/${id}/${Constants_1.EndPoints.channels}`, { headers: PayLoads_1.headers });
        return res.json();
    }
    async guildMembers(id, max) {
        const res = await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.guilds}/${id}/${Constants_1.EndPoints.members}?limit=${max}`, { headers: PayLoads_1.headers });
        return res.json();
    }
}
exports.default = Fetch;
