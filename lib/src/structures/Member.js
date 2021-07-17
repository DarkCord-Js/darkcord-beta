"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DFormats = _interopRequireDefault(require("../util/DFormats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Member {
  constructor(_id, client, _user, _nickname, _joinedDate, _boosterSince, _deaf = false, _muted = false, _avatar, _guildId) {
    this._id = _id;
    this.client = client;
    this._user = _user;
    this._nickname = _nickname;
    this._joinedDate = _joinedDate;
    this._boosterSince = _boosterSince;
    this._deaf = _deaf;
    this._muted = _muted;
    this._avatar = _avatar;
    this._guildId = _guildId;
    this._id = _id;
    this.client = client;
    this._user = _user;
    this._nickname = _nickname;
    this._joinedDate = _joinedDate;
    this._boosterSince = _boosterSince;
    this._deaf = _deaf;
    this._muted = _muted;
    this._avatar = _avatar;
    this._guildId = _guildId;
    return this;
  }

  get mention() {
    return _DFormats.default.createUserMention(this.id);
  }

  get id() {
    return this._id;
  }

  get nickname() {
    return this._nickname;
  }

  get joinedDate() {
    return this._joinedDate;
  }

  get boosterSince() {
    return this._boosterSince;
  }

  get deaf() {
    return this._deaf;
  }

  get muted() {
    return this._muted;
  }

  get user() {
    return this._user;
  }

  get avatar() {
    return this._avatar;
  }

  async ban(reason, days = 0) {
    return await this.client.rest.banMember(this._guildId, this.id, days, reason);
  }

  avatarURL({
    format = 'webp',
    dynamic = false,
    size = '128'
  }) {
    if (dynamic) format = this.avatar.startsWith('a_') ? 'gif' : format;
    return `https://cdn.discordapp.com/guilds/${this._guildId}/users/${this.id}/avatars/${this.avatar}.${format}?${size}`;
  }

  toString() {
    return this.mention;
  }

}

var _default = Member;
exports.default = _default;