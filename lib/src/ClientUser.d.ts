import { ImageFormat } from './types/Types';
declare class ClientUser {
    private _id;
    private _username;
    private _discriminator;
    private _avatar;
    private _verified;
    private _flags;
    constructor(_id: string, _username: string, _discriminator: string, _avatar: string, _verified: boolean, _flags: number);
    get flags(): number;
    get id(): string;
    get username(): string;
    get discriminator(): string;
    get avatar(): string;
    get verified(): boolean;
    get tag(): string;
    avatarURL({ format, dynamic, size }: {
        format: ImageFormat;
        dynamic: boolean;
        size: '128' | '2048';
    }): string;
}
export default ClientUser;
//# sourceMappingURL=ClientUser.d.ts.map