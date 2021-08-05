import BaseChannel from './BaseChannel';
import type { ChannelTypeDef, MessageContent } from '../../types/Types';
import type Bot from '../../Bot';
import Collection from '../../collection/Collection';
import type Message from '../Message';
declare class DMChannel extends BaseChannel {
    private _messages;
    private resolve;
    constructor(_id: string, _bot: Bot, _type: ChannelTypeDef, _lastMessageId: string, _lastPinTimestamp: Date, _name: string, _position: number);
    get messages(): Collection<string, Message>;
    sendMessage(content: MessageContent): Promise<Message | null>;
}
export default DMChannel;
//# sourceMappingURL=DMChannel.d.ts.map