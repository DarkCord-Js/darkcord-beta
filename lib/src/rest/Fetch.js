"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Constants = require("../constants/Constants");

var _PayLoads = require("../constants/PayLoads");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Fetch {
  async user(id) {
    const res = await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.users}/${id}`, {
      headers: _PayLoads.headers
    });
    return res.json();
  }

  async message(channelId, messageId) {
    const res = await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.channels}/${channelId}/${_Constants.EndPoints.messages}/${messageId}`, {
      method: 'GET',
      headers: _PayLoads.headers
    });
    return res.json();
  }

  async member(guildId, memberId) {
    const res = await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.guilds}/${guildId}/${_Constants.EndPoints.members}/${memberId}`, {
      headers: _PayLoads.headers
    });
    return res.json();
  }

  async channel(id) {
    const res = await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.channels}/${id}`, {
      headers: _PayLoads.headers
    });
    return res.json();
  }

  async guild(id) {
    const res = await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.guilds}/${id}?with_counts=true`, {
      headers: _PayLoads.headers
    });
    return res.json();
  }

  async guilds() {
    const res = await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.guilds}`, {
      headers: _PayLoads.headers
    });
    return res.json();
  }

  async guildChannels(id) {
    const res = await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.guilds}/${id}/${_Constants.EndPoints.channels}`, {
      headers: _PayLoads.headers
    });
    return res.json();
  }

  async guildMembers(id, max) {
    const res = await (0, _nodeFetch.default)(`${_Constants.Constants.API}/${_Constants.EndPoints.guilds}/${id}/${_Constants.EndPoints.members}?limit=${max}`, {
      headers: _PayLoads.headers
    });
    return res.json();
  }

}

var _default = Fetch;
exports.default = _default;