import Bot from '../../Bot';
import { ChannelTypeDef } from '../../types/Types';
declare class BaseChannel {
    protected _client: Bot;
    private _id;
    private _name;
    private _type;
    constructor(_client: Bot, _id: string, _name: string, _type: ChannelTypeDef);
    get name(): string;
    get client(): Bot;
    get type(): ChannelTypeDef;
    get id(): string;
}
export default BaseChannel;
//# sourceMappingURL=BaseChannel.d.ts.map