"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regex = exports.StatusCode = exports.EndPoints = exports.Constants = void 0;
var Constants;
(function (Constants) {
    Constants["gateway"] = "wss://gateway.discord.gg/?v=9&encoding=etf";
    Constants["API"] = "https://discord.com/api/v9";
})(Constants = exports.Constants || (exports.Constants = {}));
var EndPoints;
(function (EndPoints) {
    EndPoints["users"] = "users";
    EndPoints["user_guilds"] = "users/@me/guilds";
    EndPoints["guilds"] = "guilds";
    EndPoints["channels"] = "channels";
    EndPoints["messages"] = "messages";
    EndPoints["members"] = "members";
    EndPoints["reactions"] = "reactions";
    EndPoints["pins"] = "pins";
    EndPoints["emojis"] = "emojis";
    EndPoints["followers"] = "followers";
    EndPoints["thread_members"] = "thread-members";
    EndPoints["interactions"] = "interactions";
    EndPoints["callback"] = "callback";
    EndPoints["applications"] = "applications";
    EndPoints["commands"] = "commands";
    EndPoints["invites"] = "invites";
})(EndPoints = exports.EndPoints || (exports.EndPoints = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ok"] = 200] = "ok";
    StatusCode[StatusCode["no_content"] = 204] = "no_content";
    StatusCode[StatusCode["create"] = 201] = "create";
    StatusCode[StatusCode["bad"] = 400] = "bad";
    StatusCode[StatusCode["not_found"] = 404] = "not_found";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
var Regex;
(function (Regex) {
    Regex["emoji_with_colon"] = ":\\w+:\\d+";
    Regex["group_emoji_id"] = "^:\\w+:(\\d+)$";
    Regex["emoji_id_only"] = "^\\d+$";
    Regex["group_emoji_name"] = "^:(\\w+):d+$";
    Regex["group_emoji"] = "^:(\\w+):(\\d+)$";
})(Regex = exports.Regex || (exports.Regex = {}));
