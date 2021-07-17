import Collection from '../collection/Collection';
import type Role from './Role';
import User from './User';
declare class Emoji {
    private _id;
    private _name;
    private _roles;
    private _user;
    private _requiredColons;
    private _managed;
    private _animated;
    private _available;
    constructor(_id: string, _name: string, _roles: Collection<string, Role> | null, _user: User | null, _requiredColons?: boolean, _managed?: boolean, _animated?: boolean, _available?: boolean);
    get id(): string;
    get name(): string;
    get roles(): Collection<string, Role> | null;
    get user(): User | null;
    get requiredColons(): boolean;
    get managed(): boolean;
    get animated(): boolean;
    get avaible(): boolean;
}
export default Emoji;
//# sourceMappingURL=Emoji.d.ts.map