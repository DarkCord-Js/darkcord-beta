import type Bot from '../../Bot';
import Collection from '../../collection/Collection';
import type { ChannelTypeDef } from '../../types/Types';
import type Guild from '../Guild';
import Member from '../Member';
import GuildChannel from './GuildChannel';
interface editOptions {
    name?: string;
    archived: boolean;
    autoArchiveDuration: number;
    locked: boolean;
    rateLimitPerUser?: number;
}
declare class ThreadChannel extends GuildChannel {
    private _threadMetadata;
    members: Collection<string, Member>;
    constructor(_id: string, _bot: Bot, _type: ChannelTypeDef, _name: string, _lastMessageId: string, _lastPinTimestamp: Date, _position: number, _parentId: string, _topic: string, _guild: Guild, _permissionOverwrites: any[], _nsfw: boolean, _rateLimitPerUser: number, _threadMetadata: any);
    get metadata(): {
        archived: any;
        autoArchiveDuration: any;
        archiveTimestamp: any;
        locked: any;
    };
    get archivedAt(): Date;
    get threadMembers(): Collection<string, Member>;
    join(): Promise<this>;
    leave(): Promise<this>;
    edit(options: editOptions): Promise<void>;
}
export default ThreadChannel;
//# sourceMappingURL=ThreadChannel.d.ts.map