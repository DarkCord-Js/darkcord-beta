import BaseChannel from './BaseChannel';
import type { ChannelTypeDef, MessageContent } from '../../types/Types';
import type Client from '../../Client';
import Collection from '../../collection/Collection';
import type Message from '../Message';
declare class DMChannel extends BaseChannel {
    private _messages;
    private resolve;
    constructor(_id: string, _client: Client, _type: ChannelTypeDef, _lastMessageId: string, _lastPinTimestamp: Date, _name: string, _position: number);
    get messages(): Collection<string, Message>;
    send(content: MessageContent): Promise<Message | null>;
}
export default DMChannel;
//# sourceMappingURL=DMChannel.d.ts.map