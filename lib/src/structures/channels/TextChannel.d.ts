import { TextBasedChannel } from '../../types/Interfaces';
import GuildChannel from './GuildChannel';
import type Guild from '../Guild';
import type { ChannelTypeDef, MessageContent } from '../../types/Types';
import type Bot from '../../Bot';
import Collection from '../../collection/Collection';
import Message from '../Message';
declare class TextChannel extends GuildChannel implements TextBasedChannel {
    private _messages;
    private resolve;
    _bot: Bot;
    constructor(_id: string, _bot: Bot, _type: ChannelTypeDef, _lastMessageId: string, _lastPinTimestamp: Date, _name: string, _position: number, _parentId: string, _topic: string, _guild: Guild, _permissionOverwrites: any[], _nsfw: boolean, _rateLimitPerUser: number);
    get messages(): Collection<string, Message>;
    get bot(): Bot;
    sendMessage(content: MessageContent): Promise<Message | null>;
}
export default TextChannel;
//# sourceMappingURL=TextChannel.d.ts.map