import Bot from '../Bot';
import Guild from './Guild';
declare class Invite {
    private bot;
    private _code;
    private _guild;
    private _channel;
    private _inviter;
    private _approximate_presence_count;
    private _approximate_member_count;
    constructor(bot: Bot, _code: string, _guild: Guild, _channel: any, _inviter: any, _approximate_presence_count: number, _approximate_member_count: number);
    /** Invite code */
    get code(): string;
    /** Invite Channel */
    get channel(): Promise<import("./channels/TextChannel").default | import("./channels/CategoryChannel").default | import("./channels/VoiceChannel").default | null>;
    get inviter(): import("./User").default;
    presenceCount(): number;
    memberCount(): number;
}
export default Invite;
//# sourceMappingURL=Invite.d.ts.map