import type Bot from '../Bot';
import type { API_Member, API_Role, API_User, Partial_Emoji } from '../types/Interfaces';
import User from '../structures/User';
import Member from '../structures/Member';
import Role from '../structures/Role';
import Guild from '../structures/Guild';
import { ChannelType, ChannelTypeDef, InteractionCallTypeDef } from '../types/Types';
import Message from '../structures/Message';
import TextChannel from '../structures/channels/TextChannel';
import { Events } from '../constants/Events';
import Emoji from '../structures/Emoji';
import Reaction from '../structures/Reaction';
import ThreadChannel from '../structures/channels/ThreadChannel';
import Interaction from '../structures/Interaction';
import CategoryChannel from '../structures/channels/CategoryChannel';
import Invite from '../structures/Invite';
import VoiceChannel from '../structures/channels/VoiceChannel';
import VoiceState from '../structures/VoiceState';
declare class Resolve {
    private bot;
    private cache;
    constructor(bot: Bot);
    resolveUser(user: API_User): User;
    resolveEmoji(emoji: any): Emoji;
    resolveMember(member: API_Member, guildId: string): Member;
    resolveInvite(invite: any): Invite;
    resolveRole(role: API_Role): Role;
    resolveGuild(guild: any): Guild;
    resolveTextChannel(channel: any): Promise<TextChannel>;
    resolveThreadChannel(channel: any): Promise<ThreadChannel>;
    resolveReaction(reaction: any): Promise<Reaction>;
    resolveCategoryChannel(channel: any): Promise<CategoryChannel>;
    resolveNewsChannel(channel: any): Promise<TextChannel>;
    resolveVoiceChannel(channel: any): Promise<VoiceChannel>;
    resolveVoiceState(voiceState: any): Promise<VoiceState>;
    resolveChannel(channel: any): Promise<TextChannel | CategoryChannel | VoiceChannel | null>;
    resolveInteraction(interaction: any): Promise<Interaction>;
    resolveMessage(message: any): Promise<Message | null>;
    resolveMessageInstance(message: any, bot: Bot, channel: TextChannel, guild: Guild, user: User, member: Member | null): Message;
}
export declare function getChannelType(type: number): ChannelType;
export declare function getChannelTypeDef(type: number): ChannelTypeDef.TEXT | ChannelTypeDef.DM | ChannelTypeDef.VOICE | ChannelTypeDef.CATEGORY | ChannelTypeDef.NEWS | ChannelTypeDef.STORE | ChannelTypeDef.UNKNOWN;
export declare function getInteractionType(type: InteractionCallTypeDef): 1 | 4 | 5 | 6 | 7;
export declare function resolveParseEmoji(emoji: string | Partial_Emoji): {
    name: null;
    id: string;
    animated: boolean;
} | {
    name: null;
    id: string;
    animated?: undefined;
} | {
    name: string | undefined;
    id: string;
    animated: boolean | undefined;
} | null | undefined;
export declare function resolveEvents(event: string): Events;
export default Resolve;
//# sourceMappingURL=Resolve.d.ts.map