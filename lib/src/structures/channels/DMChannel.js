"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseChannel = _interopRequireDefault(require("./BaseChannel"));

var _Collection = _interopRequireDefault(require("../../collection/Collection"));

var _Embed = _interopRequireDefault(require("../Embed"));

var _Resolve = _interopRequireDefault(require("../../util/Resolve"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DMChannel extends _BaseChannel.default {
  _messages = new _Collection.default();

  constructor(_id, _client, _type, _lastMessageId, _lastPinTimestamp, _name, _position) {
    super(_client, _id, _name, _type);
    this.resolve = new _Resolve.default(_client);
  }

  get messages() {
    return this._messages;
  }

  async send(content) {
    if (typeof content === 'string') {
      const body = {
        content
      };
      const res = await this.client.rest.createMessage(body, this.id);
      return await this.resolve.resolveMessage(res);
    }

    if (content instanceof _Embed.default) {
      const options = {
        embeds: [content]
      };
      const res = await this.client.rest.createMessage(options, this.id);
      return await this.resolve.resolveMessage(res);
    }

    const res = await this.client.rest.createMessage(content, this.id);
    return await this.resolve.resolveMessage(res);
  }

}

var _default = DMChannel;
exports.default = _default;