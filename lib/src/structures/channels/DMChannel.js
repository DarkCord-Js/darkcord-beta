"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseChannel_1 = tslib_1.__importDefault(require("./BaseChannel"));
const Collection_1 = tslib_1.__importDefault(require("../../collection/Collection"));
const Embed_1 = tslib_1.__importDefault(require("../Embed"));
const Resolve_1 = tslib_1.__importDefault(require("../../util/Resolve"));
class DMChannel extends BaseChannel_1.default {
    _messages = new Collection_1.default();
    resolve;
    constructor(_id, _bot, _type, _lastMessageId, _lastPinTimestamp, _name, _position) {
        super(_bot, _id, _name, _type);
        this.resolve = new Resolve_1.default(_bot);
    }
    get messages() {
        return this._messages;
    }
    async sendMessage(content) {
        if (typeof content === 'string') {
            const body = { content };
            const res = await this.bot.rest.createMessage(body, this.id);
            return await this.resolve.resolveMessage(res);
        }
        if (content instanceof Embed_1.default) {
            const options = {
                embeds: [content]
            };
            const res = await this.bot.rest.createMessage(options, this.id);
            return await this.resolve.resolveMessage(res);
        }
        const res = await this.bot.rest.createMessage(content, this.id);
        return await this.resolve.resolveMessage(res);
    }
}
exports.default = DMChannel;
