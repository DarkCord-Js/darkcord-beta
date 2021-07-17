"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PayLoads_1 = require("../constants/PayLoads");
const Constants_1 = require("../constants/Constants");
const Fetch_1 = tslib_1.__importDefault(require("./Fetch"));
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
class RestAPI {
    constructor(client) {
        this.client = client;
        this._token = '';
        this._token = '';
        this.fetch = new Fetch_1.default();
    }
    async createMessage(options, id) {
        const res = await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.channels}/${id}/${Constants_1.EndPoints.messages}`, {
            method: 'POST',
            headers: PayLoads_1.headers,
            body: JSON.stringify(options)
        });
        return res.json();
    }
    async deleteMessage(channelId, messageId) {
        return await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.channels}/${channelId}/${Constants_1.EndPoints.messages}/${messageId}`, {
            method: 'POST',
            headers: PayLoads_1.headers
        });
    }
    async editMessage(options, channelId, messageId) {
        return await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.channels}/${channelId}/${Constants_1.EndPoints.messages}/${messageId}`, {
            method: 'POST',
            headers: PayLoads_1.headers,
            body: JSON.stringify(options)
        });
    }
    async banMember(guildId, memberId, days, reason) {
        return await node_fetch_1.default(`${Constants_1.Constants.API}/${Constants_1.EndPoints.guilds}/${guildId}/bans/${memberId}`, {
            method: 'PUT',
            headers: PayLoads_1.headers,
            body: JSON.stringify({
                delete_message_days: days,
                reason
            })
        });
    }
    set token(token) {
        this._token = token;
        PayLoads_1.headers.Authorization = `Bot ${this._token}`;
    }
}
exports.default = RestAPI;
