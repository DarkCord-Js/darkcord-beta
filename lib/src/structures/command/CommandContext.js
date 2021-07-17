"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandContext {
    constructor(_message, _client) {
        this._message = _message;
        this._client = _client;
    }
    /** DarkCord Client */
    get client() {
        return this._client;
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
        return this.message.channel.send(content);
    }
}
exports.default = CommandContext;
