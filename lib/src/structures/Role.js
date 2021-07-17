"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Role {
  constructor(_id, _name, _color = 0, _hoist = false, _position = 0, _permissions = 0, _managed = false, _mentionable = false) {
    this._id = _id;
    this._name = _name;
    this._color = _color;
    this._hoist = _hoist;
    this._position = _position;
    this._permissions = _permissions;
    this._managed = _managed;
    this._mentionable = _mentionable;
    this._id = _id;
    this._name = _name;
    this._color = _color;
    this._hoist = _hoist;
    this._position = _position;
    this._permissions = _permissions;
    this._managed = _managed;
    this._mentionable = _mentionable;
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
    return this._position;
  }

  get managed() {
    return this._managed;
  }

  get mentionable() {
    return this._mentionable;
  }

}

var _default = Role;
exports.default = _default;