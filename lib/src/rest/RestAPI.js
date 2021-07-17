"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PayLoads = require("../constants/PayLoads");

var _Constants = require("../constants/Constants");

var _Fetch = _interopRequireDefault(require("./Fetch"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RestAPI {
  _token = '';

  constructor(client) {
    this.client = client;
    this.client = client;
    this._token = '';
    this.fetch = new _Fetch.default();
  }

  async createMessage(options, id) {
    const res = await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.channels}/${id}/${_Constants.EndPoints.messages}`, {
      method: 'POST',
      headers: _PayLoads.headers,
      body: JSON.stringify(options)
    });
    return res.json();
  }

  async deleteMessage(channelId, messageId) {
    return await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.channels}/${channelId}/${_Constants.EndPoints.messages}/${messageId}`, {
      method: 'POST',
      headers: _PayLoads.headers
    });
  }

  async editMessage(options, channelId, messageId) {
    return await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.channels}/${channelId}/${_Constants.EndPoints.messages}/${messageId}`, {
      method: 'POST',
      headers: _PayLoads.headers,
      body: JSON.stringify(options)
    });
  }

  async banMember(guildId, memberId, days, reason) {
    return await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.guilds}/${guildId}/bans/${memberId}`, {
      method: 'PUT',
      headers: _PayLoads.headers,
      body: JSON.stringify({
        delete_message_days: days,
        reason
      })
    });
  }

  set token(token) {
    this._token = token;
    _PayLoads.headers.Authorization = `Bot ${this._token}`;
  }

}

var _default = RestAPI;
exports.default = _default;