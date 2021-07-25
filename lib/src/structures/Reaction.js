"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reaction {
    _user;
    _channel;
    _message;
    _guild;
    _emoji;
    _member;
    constructor(_user, _channel, _message, _guild, _emoji, _member) {
        this._user = _user;
        this._channel = _channel;
        this._message = _message;
        this._guild = _guild;
        this._emoji = _emoji;
        this._member = _member;
        return this;
    }
    get user() {
        return this._user;
    }
    get channel() {
        return this._channel;
    }
    get message() {
        return this._message;
    }
    get guild() {
        return this._guild;
    }
    get member() {
        return this?._member ?? null;
    }
    get emoji() {
        return this._emoji;
    }
}
exports.default = Reaction;
