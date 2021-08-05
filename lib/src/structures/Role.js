"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Permissions_1 = tslib_1.__importDefault(require("../util/Permissions"));
class Role {
    _id;
    _name;
    _color;
    _hoist;
    _position;
    _permissions;
    _managed;
    _mentionable;
    _permissions_new;
    constructor(_id, _name, _color = 0, _hoist = false, _position = 0, _permissions, _managed = false, _mentionable = false, _permissions_new) {
        this._id = _id;
        this._name = _name;
        this._color = _color;
        this._hoist = _hoist;
        this._position = _position;
        this._permissions = _permissions;
        this._managed = _managed;
        this._mentionable = _mentionable;
        this._permissions_new = _permissions_new;
        return this;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get color() {
        return this._color;
    }
    get hoist() {
        return this._hoist;
    }
    get position() {
        return this._position;
    }
    get permissions() {
        return new Permissions_1.default(this._permissions_new || this._permissions);
    }
    get managed() {
        return this._managed;
    }
    get mentionable() {
        return this._mentionable;
    }
}
exports.default = Role;
