"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseChannel {
    _bot;
    _id;
    _name;
    _type;
    constructor(_bot, _id, _name, _type) {
        this._bot = _bot;
        this._id = _id;
        this._name = _name;
        this._type = _type;
        return this;
    }
    get name() {
        return this._name;
    }
    get bot() {
        return this._bot;
    }
    get type() {
        return this._type;
    }
    get id() {
        return this._id;
    }
}
exports.default = BaseChannel;
