"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Events;
(function (Events) {
    Events["DEBUG"] = "debug";
    Events["READY"] = "ready";
    Events["MESSAGE_CREATE"] = "message";
    Events["UPDATE_MESSAGE"] = "messageUpdate";
    Events["MESSAGE_REACTION_ADD"] = "reaction";
    Events["MESSAGE_REACTION_REMOVE"] = "reactionRemove";
    Events["CONNECT"] = "connect";
    Events["DISCONNECT"] = "disconnect";
    Events["SHARD_READY"] = "shardReady";
    Events["GUILD_CREATE"] = "guildCreate";
    Events["GUILD_DELETE"] = "guildDelete";
    Events["GUILD_UPDATE"] = "guildUpdate";
    Events["GUILD_BAN_ADD"] = "guildBan";
    Events["GUILD_BAN_REMOVE"] = "guildBanRemove";
})(Events = exports.Events || (exports.Events = {}));
