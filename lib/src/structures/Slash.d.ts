import { SlashCommandOptions } from '../types/Interfaces';
import { snowflake } from '../types/Types';
import Guild from './Guild';
declare class Slash {
    private _id;
    private _application_id;
    private _name;
    private _description;
    private _guild;
    private _options;
    private _default;
    constructor(_id: snowflake, _application_id: snowflake, _name: string, _description: string, _guild: Guild, _options: SlashCommandOptions[], _default?: boolean);
}
export default Slash;
//# sourceMappingURL=Slash.d.ts.map