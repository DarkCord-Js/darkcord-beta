"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BaseChannel {
  constructor(_client, _id, _name, _type) {
    this._client = _client;
    this._id = _id;
    this._name = _name;
    this._type = _type;
    this._client = _client;
    this._id = _id;
    this._name = _name;
    this._type = _type;
    return this;
  }

  get name() {
    return this._name;
  }

  get client() {
    return this._client;
  }

  get type() {
    return this._type;
  }

  get id() {
    return this._id;
  }

}

var _default = BaseChannel;
exports.default = _default;