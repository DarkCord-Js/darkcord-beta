declare class Role {
    private _id;
    private _name;
    private _color;
    private _hoist;
    private _position;
    private _permissions;
    private _managed;
    private _mentionable;
    constructor(_id: string, _name: string, _color?: number, _hoist?: boolean, _position?: number, _permissions?: number, _managed?: boolean, _mentionable?: boolean);
    get id(): string;
    get name(): string;
    get color(): number;
    get hoist(): boolean;
    get position(): number;
    get permissions(): number;
    get managed(): boolean;
    get mentionable(): boolean;
}
export default Role;
//# sourceMappingURL=Role.d.ts.map