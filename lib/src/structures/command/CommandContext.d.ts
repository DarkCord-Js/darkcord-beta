import Bot from '../../Bot';
import { MessageContent } from '../../types/Types';
import type Message from '../Message';
declare class CommandContext {
    private _message;
    private _bot?;
    constructor(_message: Message, _bot?: Bot | undefined);
    /** DarkCord Bot */
    get bot(): Bot | undefined;
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