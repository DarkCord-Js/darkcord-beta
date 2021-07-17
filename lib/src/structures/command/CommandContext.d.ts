import Client from '../../Client';
import { MessageContent } from '../../types/Types';
import type Message from '../Message';
declare class CommandContext {
    private _message;
    private _client?;
    constructor(_message: Message, _client?: Client | undefined);
    /** DarkCord Client */
    get client(): Client | undefined;
    /** Get command Message */
    get message(): Message;
    /** Get command Channel */
    get channel(): import("../channels/TextChannel").default;
    /** Get command author */
    get author(): import("../User").default;
    /** Get command member */
    get member(): import("../Member").default | null;
    /** Get command guild */
    get guild(): import("../Guild").default | null;
    /** Send message to command channel */
    send(content: MessageContent): Promise<Message | null>;
}
export default CommandContext;
//# sourceMappingURL=CommandContext.d.ts.map