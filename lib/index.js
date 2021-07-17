"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Client_1 = tslib_1.__importDefault(require("./src/Client"));
const Constants = tslib_1.__importStar(require("./src/constants/Constants"));
const Intents_1 = tslib_1.__importDefault(require("./src/util/Intents"));
const Collection_1 = tslib_1.__importDefault(require("./src/collection/Collection"));
const BitField_1 = tslib_1.__importDefault(require("./src/util/BitField"));
const Role_1 = tslib_1.__importDefault(require("./src/structures/Role"));
const Member_1 = tslib_1.__importDefault(require("./src/structures/Member"));
const User_1 = tslib_1.__importDefault(require("./src/structures/User"));
const Resolve_1 = tslib_1.__importDefault(require("./src/util/Resolve"));
const Embed_1 = tslib_1.__importDefault(require("./src/structures/Embed"));
const Message_1 = tslib_1.__importDefault(require("./src/structures/Message"));
const Guild_1 = tslib_1.__importDefault(require("./src/structures/Guild"));
const TextChannel_1 = tslib_1.__importDefault(require("./src/structures/channels/TextChannel"));
const Emoji_1 = tslib_1.__importDefault(require("./src/structures/Emoji"));
const BaseChannel_1 = tslib_1.__importDefault(require("./src/structures/channels/BaseChannel"));
const GuildChannel_1 = tslib_1.__importDefault(require("./src/structures/channels/GuildChannel"));
const Shard_1 = tslib_1.__importDefault(require("./src/gateway/Shard"));
const ShardManager_1 = tslib_1.__importDefault(require("./src/gateway/ShardManager"));
const DMChannel_1 = tslib_1.__importDefault(require("./src/structures/channels/DMChannel"));
const CacheManager_1 = tslib_1.__importDefault(require("./src/structures/cache/CacheManager"));
const WebSocket_1 = tslib_1.__importDefault(require("./src/ws/WebSocket"));
const RestAPI_1 = tslib_1.__importDefault(require("./src/rest/RestAPI"));
const Reaction_1 = tslib_1.__importDefault(require("./src/structures/Reaction"));
const Command_1 = tslib_1.__importDefault(require("./src/structures/command/Command"));
const CommandContext_1 = tslib_1.__importDefault(require("./src/structures/command/CommandContext"));
const ClientUser_1 = tslib_1.__importDefault(require("./src/ClientUser"));
const DFormats_1 = tslib_1.__importDefault(require("./src/util/DFormats"));
/** DarkCord Function
 * @param options Client options
 * @returns DarkCord Client
 */
function DarkCord(options) {
    return new Client_1.default(options);
}
DarkCord.Client = Client_1.default;
DarkCord.Constants = Constants;
DarkCord.Intents = Intents_1.default;
DarkCord.Collection = Collection_1.default;
DarkCord.BitField = BitField_1.default;
DarkCord.Role = Role_1.default;
DarkCord.Member = Member_1.default;
DarkCord.User = User_1.default;
DarkCord.Resolve = Resolve_1.default;
DarkCord.Embed = Embed_1.default;
DarkCord.Message = Message_1.default;
DarkCord.Guild = Guild_1.default;
DarkCord.TextChannel = TextChannel_1.default;
DarkCord.BaseChannel = BaseChannel_1.default;
DarkCord.GuildChannel = GuildChannel_1.default;
DarkCord.DMChannel = DMChannel_1.default;
DarkCord.Emoji = Emoji_1.default;
DarkCord.Shard = Shard_1.default;
DarkCord.ShardManager = ShardManager_1.default;
DarkCord.CacheManager = CacheManager_1.default;
DarkCord.WebSocket = WebSocket_1.default;
DarkCord.Rest = RestAPI_1.default;
DarkCord.Reaction = Reaction_1.default;
DarkCord.Command = Command_1.default;
DarkCord.CommandContext = CommandContext_1.default;
DarkCord.ClientUser = ClientUser_1.default;
DarkCord.Format = DFormats_1.default;
exports.default = DarkCord;
