"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emoji {
    _id;
    _name;
    _roles;
    _user;
    _requiredColons;
    _managed;
    _animated;
    _available;
    constructor(_id = '', _name, _roles, _user, _requiredColons = false, _managed = false, _animated = false, _available = true) {
        this._id = _id;
        this._name = _name;
        this._roles = _roles;
        this._user = _user;
        this._requiredColons = _requiredColons;
        this._managed = _managed;
        this._animated = _animated;
        this._available = _available;
        return this;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get roles() {
        return this._roles;
    }
    get user() {
        return this._user;
    }
    get requiredColons() {
        return this._requiredColons;
    }
    get managed() {
        return this._managed;
    }
    get animated() {
        return this._animated;
    }
    get avaible() {
        return this._available;
    }
}
exports.default = Emoji;
