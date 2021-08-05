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
const BotUser_1 = tslib_1.__importDefault(require("../BotUser"));
let Gateway = Constants_1.Constants.gateway;
class Shard extends events_1.EventEmitter {
    id;
    bot;
    ws;
    receivedAck = false;
    // eslint-disable-next-line no-undef
    interval = 0;
    token;
    lastHeartBeatReceived = 0;
    lastHeartBeatSent = 0;
    constructor(id, bot) {
        super();
        this.id = id;
        this.bot = bot;
        this.token = this.bot.token;
        this.ws = null;
    }
    async connect(token) {
        this.bot.shards.set(this.id, this);
        if (token)
            this.token = token;
        if (this.bot.options.apiVersion) {
            Gateway = Gateway.replace('v=9', `v=${this.bot.options.apiVersion?.toString()}`);
        }
        this.ws = new ws_1.default(Gateway);
        this.ws.on('open', () => this.onOpen());
        this.ws.on('message', async (data) => await this.onMessage(data));
        this.ws.on('error', (err) => this.onErr(err));
        this.ws.on('close', (code, reason) => this.onClose(code, reason));
    }
    updateStatus(afk, game, since, status) {
        this.send({
            op: 3,
            d: {
                afk,
                game,
                since,
                status
            }
        });
    }
    send(data) {
        data = erlpack_1.default.pack(data);
        if (this.ws)
            return this.ws?.send(data);
        else
            throw new Error('WebSocket does not exists');
    }
    onOpen() {
        this.emit('connect', this.id);
        this.receivedAck = true;
    }
    onClose(code, reason) {
        this.bot.emit(Events_1.Events.DEBUG, `WebSocket Closed:\n${JSON.stringify({ code, reason })}`);
    }
    onErr(err) {
        this.bot.emit('error', err);
    }
    async onMessage(data) {
        try {
            const PayLoad = erlpack_1.default.unpack(data);
            this.bot.emit('raw', PayLoad);
            const { t: event, op, d } = PayLoad;
            if (d?.user) {
                const botUser = d.user;
                this.bot.user = new BotUser_1.default(botUser.id, botUser.username, botUser.discriminator, botUser.avatar, botUser.verified, botUser.flags);
            }
            switch (op) {
                case 9:
                    this.bot.emit('error', new TypeError('Invalid gateway.'));
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
                        const handler = new EventHandler_1.default(this.bot, PayLoad, this.id);
                        const _event = Event;
                        await handler[_event]();
                    }
                    catch {
                        this.bot.emit(Event);
                    }
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    identify(token) {
        PayLoads_1.identify.d.intents = this.bot.options.intents;
        PayLoads_1.identify.d.token = token;
        const data = erlpack_1.default.pack(PayLoads_1.identify);
        this.ws?.send(data);
        this.emit('ready');
    }
    async heartbeat(ms) {
        return setInterval(() => {
            this.lastHeartBeatSent = Date.now();
            this.ws?.send(erlpack_1.default.pack(PayLoads_1.HeartBeat));
            this.bot.emit(Events_1.Events.DEBUG, `HeartBeat Sent:\n${JSON.stringify({
                lastHeartBeatReceived: this.lastHeartBeatReceived,
                lastHeartBeatSent: this.lastHeartBeatSent,
                interval: this.interval,
                timestamp: Date.now()
            })}`);
        }, ms);
    }
}
exports.default = Shard;
