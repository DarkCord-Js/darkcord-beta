import { ImageFormat } from '../types/Types';
declare class User {
    private _id;
    private _username;
    private _discrimator;
    private _avatar;
    private _bot;
    private _system;
    private _mfa;
    private _locale;
    private _verified;
    private _flags;
    private _premiumType;
    private _publicFlags;
    constructor(_id: string, _username: string, _discrimator: string, _avatar: string, _bot?: boolean, _system?: boolean, _mfa?: boolean, _locale?: boolean, _verified?: boolean, _flags?: number, _premiumType?: number, _publicFlags?: number);
    get mention(): string;
    get id(): string;
    get username(): string;
    get discrimator(): string;
    get tag(): string;
    get bot(): boolean;
    get verified(): boolean;
    get mfa(): boolean;
    get premiumType(): number;
    get flags(): number;
    get publicFlags(): number;
    /** Get user avatar */
    get avatar(): string;
    /** Get user avatar url */
    avatarURL({ format, dynamic, size }: {
        format: ImageFormat;
        dynamic: boolean;
        size: '128' | '2048';
    }): string;
    toString(): string;
}
export default User;
//# sourceMappingURL=User.d.ts.map