"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Client = _interopRequireDefault(require("./src/Client"));

var Constants = _interopRequireWildcard(require("./src/constants/Constants"));

var _Intents = _interopRequireDefault(require("./src/util/Intents"));

var _Collection = _interopRequireDefault(require("./src/collection/Collection"));

var _BitField = _interopRequireDefault(require("./src/util/BitField"));

var _Role = _interopRequireDefault(require("./src/structures/Role"));

var _Member = _interopRequireDefault(require("./src/structures/Member"));

var _User = _interopRequireDefault(require("./src/structures/User"));

var _Resolve = _interopRequireDefault(require("./src/util/Resolve"));

var _Embed = _interopRequireDefault(require("./src/structures/Embed"));

var _Message = _interopRequireDefault(require("./src/structures/Message"));

var _Guild = _interopRequireDefault(require("./src/structures/Guild"));

var _TextChannel = _interopRequireDefault(require("./src/structures/channels/TextChannel"));

var _Emoji = _interopRequireDefault(require("./src/structures/Emoji"));

var _BaseChannel = _interopRequireDefault(require("./src/structures/channels/BaseChannel"));

var _GuildChannel = _interopRequireDefault(require("./src/structures/channels/GuildChannel"));

var _Shard = _interopRequireDefault(require("./src/gateway/Shard"));

var _ShardManager = _interopRequireDefault(require("./src/gateway/ShardManager"));

var _DMChannel = _interopRequireDefault(require("./src/structures/channels/DMChannel"));

var _CacheManager = _interopRequireDefault(require("./src/structures/cache/CacheManager"));

var _WebSocket = _interopRequireDefault(require("./src/ws/WebSocket"));

var _RestAPI = _interopRequireDefault(require("./src/rest/RestAPI"));

var _Reaction = _interopRequireDefault(require("./src/structures/Reaction"));

var _Command = _interopRequireDefault(require("./src/structures/command/Command"));

var _CommandContext = _interopRequireDefault(require("./src/structures/command/CommandContext"));

var _ClientUser = _interopRequireDefault(require("./src/ClientUser"));

var _DFormats = _interopRequireDefault(require("./src/util/DFormats"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** DarkCord Function
 * @param options Client options
 * @returns DarkCord Client
 */
function DarkCord(options) {
  return new _Client.default(options);
}

DarkCord.Client = _Client.default;
DarkCord.Constants = Constants;
DarkCord.Intents = _Intents.default;
DarkCord.Collection = _Collection.default;
DarkCord.BitField = _BitField.default;
DarkCord.Role = _Role.default;
DarkCord.Member = _Member.default;
DarkCord.User = _User.default;
DarkCord.Resolve = _Resolve.default;
DarkCord.Embed = _Embed.default;
DarkCord.Message = _Message.default;
DarkCord.Guild = _Guild.default;
DarkCord.TextChannel = _TextChannel.default;
DarkCord.BaseChannel = _BaseChannel.default;
DarkCord.GuildChannel = _GuildChannel.default;
DarkCord.DMChannel = _DMChannel.default;
DarkCord.Emoji = _Emoji.default;
DarkCord.Shard = _Shard.default;
DarkCord.ShardManager = _ShardManager.default;
DarkCord.CacheManager = _CacheManager.default;
DarkCord.WebSocket = _WebSocket.default;
DarkCord.Rest = _RestAPI.default;
DarkCord.Reaction = _Reaction.default;
DarkCord.Command = _Command.default;
DarkCord.CommandContext = _CommandContext.default;
DarkCord.ClientUser = _ClientUser.default;
DarkCord.Format = _DFormats.default;
var _default = DarkCord;
module.default = _default;
