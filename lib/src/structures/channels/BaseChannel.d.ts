import Client from '../../Client';
import { ChannelTypeDef } from '../../types/Types';
declare class BaseChannel {
    protected _client: Client;
    private _id;
    private _name;
    private _type;
    constructor(_client: Client, _id: string, _name: string, _type: ChannelTypeDef);
    get name(): string;
    get client(): Client;
    get type(): ChannelTypeDef;
    get id(): string;
}
export default BaseChannel;
//# sourceMappingURL=BaseChannel.d.ts.map