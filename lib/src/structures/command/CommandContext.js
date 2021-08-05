"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandContext {
    _message;
    _bot;
    constructor(_message, _bot) {
        this._message = _message;
        this._bot = _bot;
    }
    /** DarkCord Bot */
    get bot() {
        return this._bot;
    }
    /** Get command Message */
    get message() {
        return this._message;
    }
    /** Get command Channel */
    get channel() {
        return this.message.channel;
    }
    /** Get command author */
    get author() {
        return this.message.author;
    }
    /** Get command member */
    get member() {
        return this.message.member;
    }
    /** Get command guild */
    get guild() {
        return this.message.guild;
    }
    /** Send message to command channel */
    send(content) {
        return this.message.channel.sendMessage(content);
    }
}
exports.default = CommandContext;
