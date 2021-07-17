import Client from '../Client';
import { payload } from '../constants/PayLoads';
declare class EventHandler {
    private client;
    private resolve;
    private readonly payload;
    constructor(client: Client, payload: payload);
    message(): Promise<void>;
    guildCreate(): Promise<void>;
    guildDelete(): Promise<void>;
    guildUpdate(): Promise<void>;
    guildBan(): void;
    guildBanRemove(): void;
    ready(): void;
    reaction(): Promise<void>;
    reactionRemove(): Promise<void>;
}
export default EventHandler;
//# sourceMappingURL=EventHandler.d.ts.map