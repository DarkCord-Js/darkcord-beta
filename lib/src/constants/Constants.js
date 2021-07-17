"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Regex = exports.StatusCode = exports.EndPoints = exports.Constants = void 0;
let Constants;
exports.Constants = Constants;

(function (Constants) {
  Constants[Constants["gateway"] = 'wss://gateway.discord.gg/?v=9&encoding=etf'] = "gateway";
  Constants[Constants["API"] = 'https://discord.com/api/v9'] = "API";
})(Constants || (exports.Constants = Constants = {}));

let EndPoints;
exports.EndPoints = EndPoints;

(function (EndPoints) {
  EndPoints[EndPoints["users"] = 'users'] = "users";
  EndPoints[EndPoints["user_guilds"] = 'users/@me/guilds'] = "user_guilds";
  EndPoints[EndPoints["guilds"] = 'guilds'] = "guilds";
  EndPoints[EndPoints["channels"] = 'channels'] = "channels";
  EndPoints[EndPoints["messages"] = 'messages'] = "messages";
  EndPoints[EndPoints["members"] = 'members'] = "members";
  EndPoints[EndPoints["reactions"] = 'reactions'] = "reactions";
  EndPoints[EndPoints["pins"] = 'pins'] = "pins";
})(EndPoints || (exports.EndPoints = EndPoints = {}));

let StatusCode;
exports.StatusCode = StatusCode;

(function (StatusCode) {
  StatusCode[StatusCode["ok"] = 200] = "ok";
  StatusCode[StatusCode["no_content"] = 204] = "no_content";
  StatusCode[StatusCode["create"] = 201] = "create";
  StatusCode[StatusCode["bad"] = 400] = "bad";
  StatusCode[StatusCode["not_found"] = 404] = "not_found";
})(StatusCode || (exports.StatusCode = StatusCode = {}));

let Regex;
exports.Regex = Regex;

(function (Regex) {
  Regex[Regex["emoji_with_colon"] = ':\\w+:\\d+'] = "emoji_with_colon";
  Regex[Regex["group_emoji_id"] = '^:\\w+:(\\d+)$'] = "group_emoji_id";
  Regex[Regex["emoji_id_only"] = '^\\d+$'] = "emoji_id_only";
  Regex[Regex["group_emoji_name"] = '^:(\\w+):d+$'] = "group_emoji_name";
  Regex[Regex["group_emoji"] = '^:(\\w+):(\\d+)$'] = "group_emoji";
})(Regex || (exports.Regex = Regex = {}));