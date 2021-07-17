import type Client from '../../Client';
import type Guild from '../Guild';
import type { ChannelTypeDef } from '../../types/Types';
import BaseChannel from './BaseChannel';
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
    constructor(_id: string, _client: Client, _type: ChannelTypeDef, _name: string, _lastMessageId: string, _lastPinTimestamp: Date, _position: number, _parentId: string, _topic: string, _guild: Guild, _permissionOverwrites: any[], _nsfw: boolean, _rateLimitPerUser: number);
    get lastPinTimestamp(): Date;
    get position(): number;
    get parentId(): string;
    get topic(): string;
    get guild(): Guild;
    get nsfw(): boolean;
    get permissionOverwrites(): any[];
    get lastMessageId(): string;
}
export default GuildChannel;
//# sourceMappingURL=GuildChannel.d.ts.map