/// <reference types="node" />
import { EventEmitter } from 'events';
import Bot from '../Bot';
declare class Shard extends EventEmitter {
    id: string;
    private bot;
    private ws;
    private receivedAck;
    private interval;
    private token;
    private lastHeartBeatReceived;
    private lastHeartBeatSent;
    constructor(id: string, bot: Bot);
    connect(token?: string): Promise<void>;
    updateStatus(afk: boolean, game: string, since: number, status: string): void;
    send(data: any): void;
    private onOpen;
    private onClose;
    private onErr;
    onMessage(data: Buffer): Promise<void>;
    private identify;
    private heartbeat;
}
export default Shard;
//# sourceMappingURL=Shard.d.ts.map