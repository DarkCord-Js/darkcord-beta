"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = void 0;
let Events;
exports.Events = Events;

(function (Events) {
  Events[Events["DEBUG"] = 'debug'] = "DEBUG";
  Events[Events["READY"] = 'ready'] = "READY";
  Events[Events["MESSAGE_CREATE"] = 'message'] = "MESSAGE_CREATE";
  Events[Events["UPDATE_MESSAGE"] = 'messageUpdate'] = "UPDATE_MESSAGE";
  Events[Events["MESSAGE_REACTION_ADD"] = 'reaction'] = "MESSAGE_REACTION_ADD";
  Events[Events["MESSAGE_REACTION_REMOVE"] = 'reactionRemove'] = "MESSAGE_REACTION_REMOVE";
  Events[Events["CONNECT"] = 'connect'] = "CONNECT";
  Events[Events["DISCONNECT"] = 'disconnect'] = "DISCONNECT";
  Events[Events["SHARD_READY"] = 'shardReady'] = "SHARD_READY";
  Events[Events["GUILD_CREATE"] = 'guildCreate'] = "GUILD_CREATE";
  Events[Events["GUILD_DELETE"] = 'guildDelete'] = "GUILD_DELETE";
  Events[Events["GUILD_UPDATE"] = 'guildUpdate'] = "GUILD_UPDATE";
  Events[Events["GUILD_BAN_ADD"] = 'guildBan'] = "GUILD_BAN_ADD";
  Events[Events["GUILD_BAN_REMOVE"] = 'guildBanRemove'] = "GUILD_BAN_REMOVE";
})(Events || (exports.Events = Events = {}));