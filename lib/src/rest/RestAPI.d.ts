import type Client from '../Client';
import type { MessageOptions } from '../types/Interfaces';
import Fetch from './Fetch';
declare class RestAPI {
    private client;
    private _token;
    fetch: Fetch;
    constructor(client: Client);
    createMessage(options: MessageOptions, id: string): Promise<any>;
    deleteMessage(channelId: string, messageId: string): Promise<import("node-fetch").Response>;
    editMessage(options: MessageOptions, channelId: string, messageId: string): Promise<import("node-fetch").Response>;
    banMember(guildId: string, memberId: string, days: number, reason?: string): Promise<import("node-fetch").Response>;
    set token(token: string);
}
export default RestAPI;
//# sourceMappingURL=RestAPI.d.ts.map