import Bot from '../Bot';
import { InteractionCallType, InteractionCallTypeDef, InteractionType } from '../types/Types';
import GuildChannel from './channels/GuildChannel';
import TextChannel from './channels/TextChannel';
import Embed from './Embed';
import Guild from './Guild';
import Member from './Member';
import Message from './Message';
import User from './User';
declare class Interaction {
    private client;
    token: string;
    version: number;
    private _id;
    private _application_id;
    private _type;
    private _guild;
    private _channel;
    private _data;
    private _member;
    private _user;
    private _message;
    constructor(client: Bot, token: string, version: number, _id: string, _application_id: string, _type: InteractionType, _guild: Guild, _channel: GuildChannel | TextChannel, _data: any | null, _member: Member | null, _user: User | null, _message: Message | null);
    get guild(): Guild;
    get id(): string;
    get message(): Message | null;
    get member(): Member | null;
    get author(): User | null;
    get type(): InteractionType;
    get data(): {
        id: string;
        name: string;
        resolved?: {
            users?: any[] | undefined;
            members?: any[] | undefined;
            roles?: any[] | undefined;
            channels?: any[] | undefined;
        } | undefined;
        options?: [{
            name: string;
            type: number;
            value?: number | undefined;
            options?: any[] | undefined;
        }] | undefined;
        customId: string;
        componentType: number;
        values: string[];
    };
    get channel(): TextChannel | GuildChannel;
    get applicationId(): string;
    get componentType(): number;
    isCommand(): boolean;
    isComponent(): boolean;
    isButton(): boolean;
    isSelectMenu(): boolean;
    reply(data: string | Embed | any, type?: InteractionCallType | InteractionCallTypeDef): void;
}
export default Interaction;
//# sourceMappingURL=Interaction.d.ts.map