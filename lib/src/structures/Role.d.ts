import { snowflake } from '../types/Types';
import Permissions from '../util/Permissions';
declare class Role {
    private _id;
    private _name;
    private _color;
    private _hoist;
    private _position;
    private _permissions;
    private _managed;
    private _mentionable;
    private _permissions_new;
    constructor(_id: snowflake, _name: string, _color: number, _hoist: boolean, _position: number, _permissions: string, _managed: boolean, _mentionable: boolean, _permissions_new: string | null);
    get id(): string;
    get name(): string;
    get color(): number;
    get hoist(): boolean;
    get position(): number;
    get permissions(): Permissions;
    get managed(): boolean;
    get mentionable(): boolean;
}
export default Role;
//# sourceMappingURL=Role.d.ts.map