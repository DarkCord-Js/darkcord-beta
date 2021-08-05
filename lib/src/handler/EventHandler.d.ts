import Bot from '../Bot';
import { payload } from '../constants/PayLoads';
declare class EventHandler {
    private bot;
    private shardId;
    private resolve;
    private readonly payload;
    constructor(bot: Bot, payload: payload, shardId?: string);
    message(): Promise<void>;
    guildCreate(): Promise<void>;
    guildDelete(): void;
    memberUpdate(): void;
    memberAdd(): void;
    memberRemove(): void;
    messageDelete(): Promise<void>;
    messageBulkDelete(): Promise<void>;
    typing(): Promise<void>;
    roleCreate(): void;
    roleUpdate(): void;
    roleDelete(): void;
    reactionRemoveEmoji(): Promise<void>;
    reactionRemoveAll(): Promise<void>;
    guildUpdate(): Promise<void>;
    guildBan(): void;
    guildBanRemove(): void;
    ready(): void;
    hello(): void;
    voiceStateUpdate(): Promise<void>;
    interaction(): Promise<void>;
    reaction(): Promise<void>;
    reactionRemove(): Promise<void>;
    messageUpdate(): Promise<void>;
}
export default EventHandler;
//# sourceMappingURL=EventHandler.d.ts.map