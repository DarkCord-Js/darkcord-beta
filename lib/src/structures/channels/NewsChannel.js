"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Constants_1 = require("../../constants/Constants");
const TextChannel_1 = tslib_1.__importDefault(require("./TextChannel"));
class NewsChannel extends TextChannel_1.default {
    async addFollower(channel, reason) {
        return this.client.requestHandler('POST', `${Constants_1.EndPoints.channels}/${channel.id}/${Constants_1.EndPoints.followers}`, {
            webhook_channel_id: channel.id,
            reason
        });
    }
}
exports.default = NewsChannel;
