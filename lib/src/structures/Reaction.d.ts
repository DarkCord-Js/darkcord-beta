import type TextChannel from './channels/TextChannel';
import type Emoji from './Emoji';
import type Guild from './Guild';
import type Member from './Member';
import type Message from './Message';
import type User from './User';
declare class Reaction {
    private _user;
    private _channel;
    private _message;
    private _guild;
    private _emoji;
    private _member?;
    constructor(_user: User, _channel: TextChannel, _message: Message, _guild: Guild, _emoji: Emoji, _member?: Member | undefined);
    get user(): User;
    get channel(): TextChannel;
    get message(): Message;
    get guild(): Guild;
    get member(): Member | null;
    get emoji(): Emoji;
}
export default Reaction;
//# sourceMappingURL=Reaction.d.ts.map