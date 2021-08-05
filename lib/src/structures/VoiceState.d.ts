import Bot from '../Bot';
import { snowflake } from '../types/Types';
import VoiceChannel from './channels/VoiceChannel';
import Guild from './Guild';
import Member from './Member';
declare const defaultApplications: {
    youtube: string;
    poker: string;
    betrayal: string;
    fishing: string;
    chessdev: string;
    chess: string;
};
declare class VoiceState {
    guild: Guild;
    private _channel;
    private user_id;
    private _member;
    suppress: boolean;
    private session_id;
    private self_mute;
    private self_deaf;
    deaf: boolean;
    mute: boolean;
    bot: Bot;
    id: snowflake;
    userId: snowflake;
    constructor(guild: Guild, _channel: VoiceChannel, user_id: snowflake, _member: Member | null, suppress: boolean, session_id: snowflake, self_mute: boolean, self_deaf: boolean, deaf: boolean, mute: boolean);
    get member(): Member | null;
    get channel(): VoiceChannel;
    get sessionId(): snowflake;
    get selfDeaf(): boolean;
    get selfMute(): boolean;
    createActivity(option: keyof (typeof defaultApplications), applications?: any): Promise<{
        code: string;
        toString(): string;
    }>;
}
export default VoiceState;
//# sourceMappingURL=VoiceState.d.ts.map