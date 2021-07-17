"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const events_1 = require("events");
const ws_1 = tslib_1.__importDefault(require("ws"));
const Constants_1 = require("../constants/Constants");
const PayLoads_1 = require("../constants/PayLoads");
const Events_1 = require("../constants/Events");
const Resolve_1 = require("../util/Resolve");
const EventHandler_1 = tslib_1.__importDefault(require("../handler/EventHandler"));
const erlpack_1 = tslib_1.__importDefault(require("erlpack"));
const ClientUser_1 = tslib_1.__importDefault(require("../ClientUser"));
class Shard extends events_1.EventEmitter {
    constructor(id, client) {
        super();
        this.id = id;
        this.client = client;
        this.receivedAck = false;
        // eslint-disable-next-line no-undef
        this.interval = 0;
        this.lastHeartBeatReceived = 0;
        this.lastHeartBeatSent = 0;
        this.token = this.client.token;
        this.ws = null;
    }
    async connect(token) {
        if (token)
            this.token = token;
        this.ws = new ws_1.default(Constants_1.Constants.gateway, {});
        this.ws.on('open', () => {
            this.emit('connect', this.id);
            this.receivedAck = true;
        });
        this.ws.on('message', async (data) => {
            try {
                const PayLoad = erlpack_1.default.unpack(data);
                const { t: event, op, d } = PayLoad;
                if (d?.user) {
                    const clientUser = d.user;
                    this.client.user = new ClientUser_1.default(clientUser.id, clientUser.username, clientUser.discriminator, clientUser.avatar, clientUser.verified, clientUser.flags);
                }
                switch (op) {
                    case 9:
                        this.client.emit('error', new TypeError('Invalid gateway.'));
                        break;
                    case 10:
                        const { heartbeat_interval } = d;
                        this.lastHeartBeatReceived = Date.now();
                        this.interval = await this.heartbeat(heartbeat_interval);
                        this.identify(this.token);
                        break;
                    case 11:
                        this.receivedAck = true;
                        break;
                }
                if (event) {
                    const Event = Resolve_1.resolveEvents(event);
                    if (Event) {
                        try {
                            const handler = new EventHandler_1.default(this.client, PayLoad);
                            const _event = Event;
                            await handler[_event]();
                        }
                        catch {
                            this.client.emit(Event);
                        }
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
        this.ws.on('error', (err) => this.client.emit('error', err));
        this.ws.on('close', (code, reason) => {
            this.client.emit(Events_1.Events.DEBUG, `WebSocket Closed:\n${JSON.stringify({ code, reason })}`);
        });
    }
    updateStatus(afk, game, since, status) {
        const data = erlpack_1.default.pack({
            op: 3,
            d: {
                afk,
                game,
                since,
                status
            }
        });
        this.ws?.send(data);
    }
    identify(token) {
        PayLoads_1.identify.d.intents = this.client.options.intents;
        PayLoads_1.identify.d.token = token;
        const data = erlpack_1.default.pack(PayLoads_1.identify);
        this.ws?.send(data);
        this.emit('ready');
    }
    async heartbeat(ms) {
        this.lastHeartBeatSent = Date.now();
        return setInterval(() => {
            this.ws?.send(erlpack_1.default.pack(PayLoads_1.HeartBeat));
            this.client.emit(Events_1.Events.DEBUG, `HeartBeat Sent:\n${JSON.stringify({
                lastHeartBeatReceived: this.lastHeartBeatReceived,
                lastHeartBeatSent: this.lastHeartBeatSent,
                interval: this.interval,
                timestamp: Date.now()
            })}`);
        }, ms);
    }
}
exports.default = Shard;
