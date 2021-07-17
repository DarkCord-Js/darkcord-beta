"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resolve = _interopRequireDefault(require("../util/Resolve"));

var _Events = require("../constants/Events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EventHandler {
  constructor(client, payload) {
    this.client = client;
    this.client = client;
    this.resolve = new _Resolve.default(client);
    const {
      d: event_payload
    } = payload;
    this.payload = event_payload;
  }

  async message() {
    const message = await this.resolve.resolveMessage(this.payload);
    this.client.emit(_Events.Events.MESSAGE_CREATE, message);
  }

  async guildCreate() {
    const guild = await this.resolve.resolveGuild(this.payload);
    this.client.emit(_Events.Events.GUILD_CREATE, guild);
  }

  async guildDelete() {
    this.client.emit(_Events.Events.GUILD_DELETE, this.payload.id);
  }

  async guildUpdate() {
    const guild = await this.resolve.resolveGuild(this.payload);
    this.client.emit(_Events.Events.GUILD_UPDATE, guild);
  }

  guildBan() {
    const guildId = this.payload.guild_id;
    const user = this.resolve.resolveUser(this.payload.user);
    this.client.emit(_Events.Events.GUILD_BAN_ADD, guildId, user);
  }

  guildBanRemove() {
    const guildId = this.payload.guild_id;
    const user = this.resolve.resolveUser(this.payload.user);
    this.client.emit(_Events.Events.GUILD_BAN_REMOVE, guildId, user);
  }

  ready() {
    this.client.emit(_Events.Events.READY);
  }

  async reaction() {
    const reaction = await this.resolve.resolveReaction(this.payload);
    this.client.emit(_Events.Events.MESSAGE_REACTION_ADD, reaction);
  }

  async reactionRemove() {
    const reaction = await this.resolve.resolveReaction(this.payload);
    this.client.emit(_Events.Events.MESSAGE_REACTION_REMOVE, reaction);
  }

}

var _default = EventHandler;
exports.default = _default;