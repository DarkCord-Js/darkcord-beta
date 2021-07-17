/// <reference types="node" />
import EventEmitter from 'events';
import Client from '../Client';
/** DarkCord WebSocket Manager */
declare class WsManager extends EventEmitter {
    private client;
    private shards;
    constructor(client: Client);
    /** Spawn Shards */
    connect(shards: number): Promise<void>;
}
export default WsManager;
//# sourceMappingURL=WebSocket.d.ts.map