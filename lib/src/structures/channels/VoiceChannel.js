"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseChannel_1 = tslib_1.__importDefault(require("./BaseChannel"));
class VoiceChannel extends BaseChannel_1.default {
    guild;
    bitrate;
    rtc_region;
    user_limit;
    user_id;
    constructor(_bot, _id, _name, _type, guild, bitrate, rtc_region, user_limit, user_id) {
        super(_bot, _id, _name, _type);
        this.guild = guild;
        this.bitrate = bitrate;
        this.rtc_region = rtc_region;
        this.user_limit = user_limit;
        this.user_id = user_id;
    }
    get userId() {
        return this.user_id;
    }
    get rtcRegion() {
        return this.rtc_region;
    }
    get userLimit() {
        return this.user_limit;
    }
    get channel() {
        return this.bot.getChannel(this.id).then((channel) => {
            return channel;
        });
    }
}
exports.default = VoiceChannel;
