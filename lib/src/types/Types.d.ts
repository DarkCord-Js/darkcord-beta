import type Embed from '../structures/Embed';
import type { MessageOptions } from './Interfaces';
export declare type bit = string | number | bigint | object | any[];
export declare type image = {
    url: string;
    proxyURL?: string;
    height?: number;
    width?: number;
} | null;
export declare type thumbnail = {
    url: string;
    proxyURL?: string;
    height?: number;
    width?: number;
} | null;
export declare type video = {
    url: string;
    proxyURL?: string;
    height?: number;
    width?: number;
} | null;
export declare type author = {
    name: string;
    iconURL?: string;
    url?: string;
    proxyURL?: string;
} | null;
export declare type provider = {
    name: string;
    url?: string;
} | null;
export declare type footer = {
    text: string;
    iconURL?: string;
} | null;
export declare type EventNoResolvable = 'DEBUG' | 'READY' | 'MESSAGE_CREATE' | 'MESSAGE_REACTION_ADD' | 'MESSAGE_REACTION_REMOVE';
export declare type EventResolvable = 'ready' | 'message' | 'reaction' | 'reactionRemove';
export declare type IntentsType = 'GUILDS' | 'GUILD_MEMBERS' | 'GUILD_BANS' | 'GUILD_EMOJIS' | 'GUILD_INTEGRATIONS' | 'GUILD_WEBHOOKS' | 'GUILD_INVITES' | 'GUILD_VOICE_STATES' | 'GUILD_PRESENCES' | 'GUILD_MESSAGES' | 'GUILD_MESSAGE_REACTIONS' | 'GUILD_MESSAGE_TYPING' | 'DIRECT_MESSAGES' | 'DIRECT_MESSAGE_REACTIONS' | 'DIRECT_MESSAGE_TYPING' | 'ALL';
export declare type ImageFormat = 'png' | 'jpeg' | 'jpg' | 'webp' | 'gif';
export declare type CacheTypes = 'channels' | 'users' | 'guilds' | 'emojis';
export declare type MessageContent = string | MessageOptions | Embed;
export declare type StyleTimestamp = 't' | 'T' | 'd' | 'D' | 'f *' | 'F' | 'R';
export declare enum ChannelType {
    TEXT = 0,
    DM = 1,
    VOICE = 2,
    GROUP = 3,
    CATEGORY = 4,
    NEWS = 5,
    STORE = 6,
    UNKNOWN = -1
}
export declare enum ChannelTypeDef {
    TEXT = "text",
    DM = "dm",
    VOICE = "voice",
    GROUP = "group",
    CATEGORY = "category",
    NEWS = "news",
    STORE = "store",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Types.d.ts.map