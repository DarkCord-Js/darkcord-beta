import Bot from '../Bot';
import { payload } from '../constants/PayLoads';
declare class EventHandler {
    private client;
    private resolve;
    private readonly payload;
    constructor(client: Bot, payload: payload);
    message(): Promise<void>;
    guildCreate(): Promise<void>;
    guildDelete(): Promise<void>;
    guildUpdate(): Promise<void>;
    guildBan(): void;
    guildBanRemove(): void;
    ready(): void;
    hello(): void;
    interaction(): Promise<void>;
    reaction(): Promise<void>;
    reactionRemove(): Promise<void>;
    messageUpdate(): Promise<void>;
}
export default EventHandler;
//# sourceMappingURL=EventHandler.d.ts.map