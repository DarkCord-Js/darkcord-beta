/// <reference types="node" />
import EventEmitter from 'events';
import Bot from '../Bot';
/** DarkCord WebSocket Manager */
declare class WsManager extends EventEmitter {
    private bot;
    private shards;
    constructor(bot: Bot);
    /** Spawn Shards */
    connect(shards: number): Promise<void>;
}
export default WsManager;
//# sourceMappingURL=WebSocket.d.ts.map