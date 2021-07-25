import Bot from '../Bot';
import { ImageFormat } from '../types/Types';
import User from './User';
declare class Member {
    private _id;
    private client;
    private _user;
    private _nickname;
    private _joinedDate;
    private _boosterSince;
    private _deaf;
    private _muted;
    private _avatar;
    private _guildId;
    constructor(_id: string, client: Bot, _user: User, _nickname: string, _joinedDate: Date, _boosterSince: Date, _deaf: boolean, _muted: boolean, _avatar: string, _guildId: string);
    get mention(): string;
    get id(): string;
    get nickname(): string;
    get joinedDate(): Date;
    get boosterSince(): Date;
    get deaf(): boolean;
    get muted(): boolean;
    get user(): User;
    get avatar(): string;
    ban(reason?: string, days?: number): Promise<any>;
    avatarURL({ format, dynamic, size }: {
        format: ImageFormat;
        dynamic: boolean;
        size: '128' | '2048';
    }): string;
    toString(): string;
}
export default Member;
//# sourceMappingURL=Member.d.ts.map