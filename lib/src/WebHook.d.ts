/// <reference types="node" />
import EventEmitter from 'events';
import RestAPI from './rest/RestAPI';
import type { MessageContent, requestTypes } from './types/Types';
declare class Webhook extends EventEmitter {
    url: string;
    id: string;
    token: string;
    guildId?: string;
    channelId?: string;
    avatar?: string;
    name?: string;
    applicationId?: string;
    rest: RestAPI;
    constructor(url: string);
    requestHandler(method: requestTypes, endpoint: string, data?: any): Promise<any>;
    execute(content: MessageContent): Promise<{
        id: string;
    }>;
}
export default Webhook;
//# sourceMappingURL=WebHook.d.ts.map