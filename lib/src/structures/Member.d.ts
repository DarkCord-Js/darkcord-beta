import Bot from '../Bot';
import { ImageFormat } from '../types/Types';
import User from './User';
import Collection from '../collection/Collection';
import Role from './Role';
declare class Member {
    private _id;
    private bot;
    private _user;
    private _nickname;
    private _joinedDate;
    private _boosterSince;
    private _deaf;
    private _muted;
    private _avatar;
    private _guildId;
    rolesIds: string[];
    private _roles;
    constructor(_id: string, bot: Bot, _user: User, _nickname: string, _joinedDate: Date, _boosterSince: Date, _deaf: boolean, _muted: boolean, _avatar: string, _guildId: string, rolesIds: string[]);
    get mention(): string;
    get id(): string;
    get nickname(): string;
    get permissions(): import("../util/Permissions").default | undefined;
    get joinedDate(): Date;
    get boosterSince(): Date;
    get deaf(): boolean;
    get muted(): boolean;
    get user(): User;
    get avatar(): string;
    get guild(): import("./Guild").default | undefined;
    get voiceState(): import("./VoiceState").default | undefined;
    ban(reason?: string, days?: number): Promise<any>;
    avatarURL({ format, dynamic, size }: {
        format: ImageFormat;
        dynamic: boolean;
        size: '128' | '2048';
    }): string;
    get roles(): Collection<string, Role>;
    private findMemberRoles;
    toString(): string;
}
export default Member;
//# sourceMappingURL=Member.d.ts.map