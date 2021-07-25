"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const GuildChannel_1 = tslib_1.__importDefault(require("./GuildChannel"));
class CategoryChannel extends GuildChannel_1.default {
    get children() {
        return this.guild.channels.filter((channel) => channel.parentId === this.id);
    }
}
exports.default = CategoryChannel;
