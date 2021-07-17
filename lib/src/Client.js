"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = _interopRequireDefault(require("events"));

var _RestAPI = _interopRequireDefault(require("./rest/RestAPI"));

var _WebSocket = _interopRequireDefault(require("./ws/WebSocket"));

var _Events = require("./constants/Events");

var _Intents = _interopRequireDefault(require("./util/Intents"));

var _Collection = _interopRequireDefault(require("./collection/Collection"));

var _CacheManager = _interopRequireDefault(require("./structures/cache/CacheManager"));

var _Resolve = _interopRequireDefault(require("./util/Resolve"));

var _Loader = require("./structures/Loader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** DarkCord Client */
class Client extends _events.default {
  token = '';

  constructor(_options) {
    var _this$_options, _this$_options3, _this$_options4, _this$_options5, _this$_options6, _this$_options6$cache, _this$_options7, _this$_options7$cache, _this$_options8, _this$_options8$cache, _this$_options9, _this$_options9$cache, _this$_options10, _this$_options10$cach, _this$_options11, _this$_options11$cach, _this$_options12, _this$_options12$cach, _this$options;

    super();
    this._options = _options;
    this._options = _options;
    this.users = new _Collection.default();
    this.guilds = new _Collection.default();
    this.emojis = new _Collection.default();
    this.channels = new _Collection.default();
    this.commands = new _Collection.default();
    let intents = 0;

    if ((_this$_options = this._options) !== null && _this$_options !== void 0 && _this$_options.intents) {
      for (const intent of (_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.intents) {
        var _this$_options2;

        if (typeof intent === 'string') {
          if (_Intents.default[intent]) {
            intents |= _Intents.default[intent];
          }
        } else {
          intents |= intent;
        }
      }
    }

    this.options = {
      token: (_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.token,
      apiVersion: ((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.apiVersion) ?? 9,
      intents: intents,
      shardCount: ((_this$_options5 = this._options) === null || _this$_options5 === void 0 ? void 0 : _this$_options5.shardCount) ?? 0,
      cache: {
        guilds: ((_this$_options6 = this._options) === null || _this$_options6 === void 0 ? void 0 : (_this$_options6$cache = _this$_options6.cache) === null || _this$_options6$cache === void 0 ? void 0 : _this$_options6$cache.guilds) ?? true,
        users: ((_this$_options7 = this._options) === null || _this$_options7 === void 0 ? void 0 : (_this$_options7$cache = _this$_options7.cache) === null || _this$_options7$cache === void 0 ? void 0 : _this$_options7$cache.users) ?? true,
        roles: ((_this$_options8 = this._options) === null || _this$_options8 === void 0 ? void 0 : (_this$_options8$cache = _this$_options8.cache) === null || _this$_options8$cache === void 0 ? void 0 : _this$_options8$cache.roles) ?? true,
        channels: ((_this$_options9 = this._options) === null || _this$_options9 === void 0 ? void 0 : (_this$_options9$cache = _this$_options9.cache) === null || _this$_options9$cache === void 0 ? void 0 : _this$_options9$cache.channels) ?? true,
        presences: ((_this$_options10 = this._options) === null || _this$_options10 === void 0 ? void 0 : (_this$_options10$cach = _this$_options10.cache) === null || _this$_options10$cach === void 0 ? void 0 : _this$_options10$cach.presences) ?? true,
        overwrites: ((_this$_options11 = this._options) === null || _this$_options11 === void 0 ? void 0 : (_this$_options11$cach = _this$_options11.cache) === null || _this$_options11$cach === void 0 ? void 0 : _this$_options11$cach.overwrites) ?? true,
        emojis: ((_this$_options12 = this._options) === null || _this$_options12 === void 0 ? void 0 : (_this$_options12$cach = _this$_options12.cache) === null || _this$_options12$cach === void 0 ? void 0 : _this$_options12$cach.emojis) ?? true
      }
    };
    this.rest = new _RestAPI.default(this);
    this.socket = new _WebSocket.default(this);
    this.token = ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.token) ?? '';
    this.startedAt = null;
  }
  /** Connect bot to Discord API */


  async login(token = this.token) {
    if (!token) throw new Error('Invalid token.');
    this.token = token = token.replace(/^(Bot|Bearer)/i, '');
    this.rest.token = token;
    this.emit(_Events.Events.DEBUG, `Token: ${this.token}`);
    await this.socket.connect(this.options.shardCount || 0);
    this.startedAt = Date.now();
    return this;
  }
  /** Get bot uptime */


  get uptime() {
    return this.startedAt ? Date.now() - this.startedAt : null;
  }
  /** Get discord user */


  async getUser(id) {
    let user = this.users.get(id);

    if (!user) {
      const userNoResolvable = await this.rest.fetch.user(id);
      const resolve = new _Resolve.default(this);
      user = resolve.resolveUser(userNoResolvable);
      new _CacheManager.default(this).manage('users', id, user);
    }

    return user;
  }
  /** Get guild member */


  async getMember(memberId, guildId) {
    const memberNoResolvable = await this.rest.fetch.member(guildId, memberId);
    const resolve = new _Resolve.default(this);
    const member = resolve.resolveMember(memberNoResolvable, guildId);
    return member;
  }
  /** Get guild */


  async getGuild(id) {
    let guild = this.guilds.get(id);

    if (guild) {
      const guildNoResolvable = this.rest.fetch.guild(id);
      const resolve = new _Resolve.default(this);
      guild = resolve.resolveGuild(guildNoResolvable);
      new _CacheManager.default(this).manage('guilds', id, guild);
    }

    return guild;
  }
  /** Load commands */


  async commandLoader(path) {
    return await (0, _Loader.CommandLoader)(this, path);
  }
  /** Load Events */


  async eventLoader(path) {
    return await (0, _Loader.EventLoader)(this, path);
  }

  on(event, listener) {
    super.on(event, listener);
    return this;
  }

}

var _default = Client;
exports.default = _default;