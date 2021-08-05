import type Bot from '../../Bot';
import type Guild from '../Guild';
import type { ChannelTypeDef } from '../../types/Types';
import BaseChannel from './BaseChannel';
import { CreateInviteOptions } from '../../types/Interfaces';
declare class GuildChannel extends BaseChannel {
    private _lastMessageId;
    private _lastPinTimestamp;
    private _position;
    private _parentId;
    private _topic;
    private _guild;
    private _permissionOverwrites;
    private _nsfw;
    private _rateLimitPerUser;
    constructor(_id: string, _bot: Bot, _type: ChannelTypeDef, _name: string, _lastMessageId: string, _lastPinTimestamp: Date, _position: number, _parentId: string, _topic: string, _guild: Guild, _permissionOverwrites: any[], _nsfw: boolean, _rateLimitPerUser: number);
    get lastPinTimestamp(): Date;
    get position(): number;
    get parentId(): string;
    get topic(): string;
    get guild(): Guild;
    get nsfw(): boolean;
    get permissionOverwrites(): any[];
    get lastMessageId(): string;
    get rateLimitPerUser(): number;
    set rateLimitPerUser(rate: number);
    delete(timeout?: {
        timeout: number;
    }): Promise<void>;
    createInvite(options?: CreateInviteOptions): Promise<{
        code: any;
        approximatePresenceCount: any;
        approximateMemberCount: any;
        inviter: import("../User").default;
        channel: import("./TextChannel").default | import("./CategoryChannel").default | import("./VoiceChannel").default | null;
    }>;
}
export default GuildChannel;
//# sourceMappingURL=GuildChannel.d.ts.map