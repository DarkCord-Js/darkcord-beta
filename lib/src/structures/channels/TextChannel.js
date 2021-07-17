"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GuildChannel = _interopRequireDefault(require("./GuildChannel"));

var _Embed = _interopRequireDefault(require("../Embed"));

var _Resolve = _interopRequireDefault(require("../../util/Resolve"));

var _Collection = _interopRequireDefault(require("../../collection/Collection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TextChannel extends _GuildChannel.default {
  _messages = new _Collection.default();

  constructor(_id, _client, _type, _lastMessageId, _lastPinTimestamp, _name, _position, _parentId, _topic, _guild, _permissionOverwrites, _nsfw, _rateLimitPerUser) {
    super(_id, _client, _type, _name, _lastMessageId, _lastPinTimestamp, _position, _parentId, _topic, _guild, _permissionOverwrites, _nsfw, _rateLimitPerUser);
    this._client = _client;
    this.resolve = new _Resolve.default(this.client);
  }

  get messages() {
    return this._messages;
  }

  get client() {
    return this._client;
  }

  async send(content) {
    if (typeof content === 'string') {
      const body = {
        content
      };
      const res = await this.client.rest.createMessage(body, this.id);
      res.guild_id = this.guild.id;
      return await this.resolve.resolveMessage(res);
    }

    if (content instanceof _Embed.default) {
      const options = {
        embeds: [content]
      };
      const res = await this.client.rest.createMessage(options, this.id);
      res.guild_id = this.guild.id;
      return await this.resolve.resolveMessage(res);
    }

    const res = await this.client.rest.createMessage(content, this.id);
    return await this.resolve.resolveMessage(res);
  }

}

var _default = TextChannel;
exports.default = _default;