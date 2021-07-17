/// <reference types="node" />
import EventEmitter from 'events';
import RestAPI from './rest/RestAPI';
import WebSocket from './ws/WebSocket';
import Collection from './collection/Collection';
import type User from './structures/User';
import type Guild from './structures/Guild';
import type BaseChannel from './structures/channels/BaseChannel';
import type Emoji from './structures/Emoji';
import type { ClientOptions, ClientOptions2, CommandOptions } from './types/Interfaces';
import type Message from './structures/Message';
import type Reaction from './structures/Reaction';
import Command from './structures/command/Command';
import Member from './structures/Member';
declare interface Client {
    on(event: string | symbol, listener: (...args: any[]) => void): Client;
    on(event: 'message', listener: (message: Message) => void): Client;
    on(event: 'reaction', listener: (reaction: Reaction) => void): Client;
    on(event: 'reactionRemove', listener: (reaction: Reaction) => void): Client;
    on(event: 'ready', listener: () => void): Client;
    on(event: 'guildCreate', listener: (guild: Guild) => void): Client;
    on(event: 'guildDelete', listener: (guildId: string) => void): Client;
    on(event: 'command', listener: (command: CommandOptions) => void): Client;
}
/** DarkCord Client */
declare class Client extends EventEmitter {
    private _options?;
    rest: RestAPI;
    token: string;
    private startedAt;
    options: ClientOptions2;
    users: Collection<string, User>;
    guilds: Collection<string, Guild>;
    emojis: Collection<string, Emoji>;
    channels: Collection<string, BaseChannel>;
    user: User | any;
    commands: Collection<string, Command>;
    socket: WebSocket;
    constructor(_options?: ClientOptions | undefined);
    /** Connect bot to Discord API */
    login(token?: string): Promise<Client>;
    /** Get bot uptime */
    get uptime(): number | null;
    /** Get discord user */
    getUser(id: string): Promise<User>;
    /** Get guild member */
    getMember(memberId: string, guildId: string): Promise<Member>;
    /** Get guild */
    getGuild(id: string): Promise<Guild | undefined>;
    /** Load commands */
    commandLoader(path?: string): Promise<{
        loaded: string[];
        path: string;
    }>;
    /** Load Events */
    eventLoader(path?: string): Promise<{
        loaded: string[];
        path: string;
    }>;
}
export default Client;
//# sourceMappingURL=Client.d.ts.map