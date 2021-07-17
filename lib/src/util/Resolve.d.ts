import type Client from '../Client';
import type { API_Member, API_Role, API_User } from '../types/Interfaces';
import User from '../structures/User';
import Member from '../structures/Member';
import Role from '../structures/Role';
import Guild from '../structures/Guild';
import { ChannelType, ChannelTypeDef } from '../types/Types';
import Message from '../structures/Message';
import TextChannel from '../structures/channels/TextChannel';
import { Events } from '../constants/Events';
import Emoji from '../structures/Emoji';
import Reaction from '../structures/Reaction';
declare class Resolve {
    private client;
    private cache;
    constructor(client: Client);
    resolveUser(user: API_User): User;
    resolveEmoji(emoji: any): Emoji;
    resolveMember(member: API_Member, guildId: string): Member;
    resolveRole(role: API_Role): Role;
    resolveGuild(guild: any): Guild;
    resolveTextChannel(channel: any): Promise<TextChannel>;
    resolveReaction(reaction: any): Promise<Reaction>;
    resolveMessage(message: any): Promise<Message | null>;
    resolveMessageInstance(message: any, client: Client, channel: TextChannel, guild: Guild, user: User, member: Member | null): Message;
}
export declare function getChannelType(type: number): ChannelType;
export declare function getChannelTypeDef(type: number): ChannelTypeDef.TEXT | ChannelTypeDef.DM | ChannelTypeDef.VOICE | ChannelTypeDef.CATEGORY | ChannelTypeDef.NEWS | ChannelTypeDef.STORE | ChannelTypeDef.UNKNOWN;
export declare function resolveEvents(event: string): Events;
export default Resolve;
//# sourceMappingURL=Resolve.d.ts.map