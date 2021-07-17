import Client from './src/Client';
import type { ClientOptions } from './src/types/Interfaces';
import WsManager from './src/ws/WebSocket';
import RestAPI from './src/rest/RestAPI';
/** DarkCord Function
 * @param options Client options
 * @returns DarkCord Client
 */
declare function DarkCord(options?: ClientOptions): Client;
declare namespace DarkCord {
    var Client: typeof import("./src/Client").default;
    var Constants: typeof import("./src/constants/Constants");
    var Intents: {
        GUILDS: number;
        GUILD_MEMBERS: number;
        GUILD_BANS: number;
        GUILD_EMOJIS: number;
        GUILD_INTEGRATIONS: number;
        GUILD_WEBHOOKS: number;
        GUILD_INVITES: number;
        GUILD_VOICE_STATES: number;
        GUILD_PRESENCES: number;
        GUILD_MESSAGES: number;
        GUILD_MESSAGE_REACTIONS: number;
        GUILD_MESSAGE_TYPING: number;
        DIRECT_MESSAGES: number;
        DIRECT_MESSAGE_REACTIONS: number;
        DIRECT_MESSAGE_TYPING: number;
        ALL: number;
    };
    var Collection: typeof import("./src/collection/Collection").default;
    var BitField: typeof import("./src/util/BitField").default;
    var Role: typeof import("./src/structures/Role").default;
    var Member: typeof import("./src/structures/Member").default;
    var User: typeof import("./src/structures/User").default;
    var Resolve: typeof import("./src/util/Resolve").default;
    var Embed: typeof import("./src/structures/Embed").default;
    var Message: typeof import("./src/structures/Message").default;
    var Guild: typeof import("./src/structures/Guild").default;
    var TextChannel: typeof import("./src/structures/channels/TextChannel").default;
    var BaseChannel: typeof import("./src/structures/channels/BaseChannel").default;
    var GuildChannel: typeof import("./src/structures/channels/GuildChannel").default;
    var DMChannel: typeof import("./src/structures/channels/DMChannel").default;
    var Emoji: typeof import("./src/structures/Emoji").default;
    var Shard: typeof import("./src/gateway/Shard").default;
    var ShardManager: typeof import("./src/gateway/ShardManager").default;
    var CacheManager: typeof import("./src/structures/cache/CacheManager").default;
    var WebSocket: typeof WsManager;
    var Rest: typeof RestAPI;
    var Reaction: typeof import("./src/structures/Reaction").default;
    var Command: typeof import("./src/structures/command/Command").default;
    var CommandContext: typeof import("./src/structures/command/CommandContext").default;
    var ClientUser: typeof import("./src/ClientUser").default;
    var Format: {
        createTimestamp: (time: number) => string;
        createStyledTimestamp: (time: number, style: import("./src/types/Types").StyleTimestamp) => string;
        createUserMention: (userId: string) => string;
        createRoleMention: (roleId: string) => string;
        createChannelMention: (channelId: string) => string;
        createEmojiCode: (emojiName: string, emojiId: string) => string;
        createAnimatedEmojiCode: (emojiName: string, emojiId: string) => string;
    };
}
export default DarkCord;
//# sourceMappingURL=index.d.ts.map