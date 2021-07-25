/// <reference types="node" />
import { EventEmitter } from 'events';
import Bot from '../Bot';
declare class Shard extends EventEmitter {
    id: string;
    private client;
    private ws;
    private receivedAck;
    private interval;
    private token;
    private lastHeartBeatReceived;
    private lastHeartBeatSent;
    constructor(id: string, client: Bot);
    connect(token?: string): Promise<void>;
    updateStatus(afk: boolean, game: string, since: number, status: string): void;
    private identify;
    private heartbeat;
}
export default Shard;
//# sourceMappingURL=Shard.d.ts.map