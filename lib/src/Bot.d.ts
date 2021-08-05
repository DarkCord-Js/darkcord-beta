/// <reference types="node" />
import EventEmitter from 'events';
import RestAPI from './rest/RestAPI';
import WebSocket from './ws/WebSocket';
import Collection from './collection/Collection';
import type User from './structures/User';
import type Guild from './structures/Guild';
import type BaseChannel from './structures/channels/BaseChannel';
import type Emoji from './structures/Emoji';
import type { BotOptions, BotOptions2, CommandOptions, LavaLinkOptions, Plugin, SlashCommandOptions } from './types/Interfaces';
import type { requestTypes, snowflake } from './types/Types';
import type Message from './structures/Message';
import type Reaction from './structures/Reaction';
import Member from './structures/Member';
import BotUser from './BotUser';
import { payload } from './constants/PayLoads';
import type Interaction from './structures/Interaction';
import Shard from './gateway/Shard';
import VoiceState from './structures/VoiceState';
import LavaLink from './voice/LavaLink';
import Role from './structures/Role';
import TextChannel from './structures/channels/TextChannel';
declare interface Bot {
    on(event: string | symbol, listener: (...args: any[]) => void): Bot;
    on(event: 'message', listener: (message: Message) => void): Bot;
    on(event: 'reaction', listener: (reaction: Reaction) => void): Bot;
    on(event: 'reactionRemove', listener: (reaction: Reaction) => void): Bot;
    on(event: 'ready', listener: () => void): Bot;
    on(event: 'guildCreate', listener: (guild: Guild) => void): Bot;
    on(event: 'guildDelete', listener: (guildId: snowflake) => void): Bot;
    on(event: 'command', listener: (command: CommandOptions) => void): Bot;
    on(event: 'hello', listener: (heartbeatInterval: number) => void): Bot;
    on(event: 'interaction', listener: (interaction: Interaction) => void): Bot;
    on(event: 'debug', listener: (message: string) => void): Bot;
    on(event: 'voiceStateUpdate', listener: (voiceState: VoiceState) => void): Bot;
    on(event: 'raw', listener: (payload: payload) => void): Bot;
    on(event: 'memberUpdate', listener: (member: Member) => void): Bot;
    on(event: 'guildUpdate', listener: (guild: Guild) => void): Bot;
    on(event: 'roleCreate', listener: (role: Role, guild: Guild) => void): Bot;
    on(event: 'roleUpdate', listener: (role: Role, guild: Guild) => void): Bot;
    on(event: 'roleDelete', listener: (roleId: snowflake, guild: Guild) => void): Bot;
    on(event: 'typing', listener: (channel: TextChannel, user: User, timestamp: number, guild: Guild | null) => void): Bot;
    on(event: 'messageDelete', listener: (id: snowflake, channel: TextChannel, guild: Guild | null) => void): Bot;
    on(event: 'messageBulkDelete', listener: (ids: snowflake[], channel: TextChannel, guild: Guild | null) => void): Bot;
    once(event: string | symbol, listener: (...args: any[]) => void): Bot;
    once(event: 'message', listener: (message: Message) => void): Bot;
    once(event: 'reaction', listener: (reaction: Reaction) => void): Bot;
    once(event: 'reactionRemove', listener: (reaction: Reaction) => void): Bot;
    once(event: 'ready', listener: () => void): Bot;
    once(event: 'guildCreate', listener: (guild: Guild) => void): Bot;
    once(event: 'guildDelete', listener: (guildId: snowflake) => void): Bot;
    once(event: 'command', listener: (command: CommandOptions) => void): Bot;
    once(event: 'hello', listener: (heartbeatInterval: number) => void): Bot;
    once(event: 'interaction', listener: (interaction: Interaction) => void): Bot;
    once(event: 'debug', listener: (message: string) => void): Bot;
    once(event: 'voiceStateUpdate', listener: (voiceState: VoiceState) => void): Bot;
    once(event: 'raw', listener: (payload: payload) => void): Bot;
    once(event: 'memberUpdate', listener: (member: Member) => void): Bot;
    once(event: 'guildUpdate', listener: (guild: Guild) => void): Bot;
    once(event: 'roleCreate', listener: (role: Role, guild: Guild) => void): Bot;
    once(event: 'roleUpdate', listener: (role: Role, guild: Guild) => void): Bot;
    once(event: 'roleDelete', listener: (roleId: snowflake, guild: Guild) => void): Bot;
    once(event: 'typing', listener: (channel: TextChannel, user: User, timestamp: number, guild: Guild | null) => void): Bot;
    once(event: 'messageDelete', listener: (id: snowflake, channel: TextChannel, guild: Guild | null) => void): Bot;
    once(event: 'messageBulkDelete', listener: (ids: snowflake[], channel: TextChannel, guild: Guild | null) => void): Bot;
}
/** DarkCord Bot */
declare class Bot extends EventEmitter {
    private _options?;
    rest: RestAPI;
    token: string;
    private startedAt;
    options: BotOptions2;
    users: Collection<string, User>;
    guilds: Collection<string, Guild>;
    emojis: Collection<string, Emoji>;
    channels: Collection<string, BaseChannel>;
    user: BotUser | any;
    socket: WebSocket;
    plugins: Record<string, Plugin>;
    guildShards: Collection<string, string>;
    shards: Collection<string, Shard>;
    constructor(_options?: BotOptions | undefined);
    /** Connect bot to Discord API */
    run(token?: string): Promise<Bot>;
    /** Get bot uptime */
    get uptime(): number | null;
    /** Get bot host os */
    get os(): string;
    lavaLink(host: string, port: number, password: string, options?: LavaLinkOptions): LavaLink;
    /** Get discord user */
    getUser(id: string): Promise<User>;
    /** Get guild member */
    getMember(memberId: string, guildId: string): Promise<Member>;
    /** Get guild */
    getGuild(id: string): Promise<Guild>;
    /** Get channel */
    getChannel(id: string): Promise<any>;
    get slash(): {
        create: {
            guild: (guildId: string, options: SlashCommandOptions) => Promise<any>;
            global: (options: SlashCommandOptions) => Promise<any>;
        };
        delete: {
            guild: (guildId: string, commandId: string) => Promise<any>;
        };
    };
    createGlobalSlash(options: SlashCommandOptions): Promise<any>;
    createSlash(guildId: string, options: SlashCommandOptions): Promise<any>;
    deleteSlash(guildId: string, commandId: string): Promise<any>;
    getInvite(inviteCode: string): Promise<import("./structures/Invite").default>;
    requestHandler(method: requestTypes, endpoint: string, data?: any): Promise<any>;
}
export default Bot;
//# sourceMappingURL=Bot.d.ts.map