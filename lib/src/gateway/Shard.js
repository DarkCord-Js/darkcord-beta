"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = require("events");

var _ws = _interopRequireDefault(require("ws"));

var _Constants = require("../constants/Constants");

var _PayLoads = require("../constants/PayLoads");

var _Events = require("../constants/Events");

var _Resolve = require("../util/Resolve");

var _EventHandler = _interopRequireDefault(require("../handler/EventHandler"));

var _erlpack = _interopRequireDefault(require("erlpack"));

var _ClientUser = _interopRequireDefault(require("../ClientUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Shard extends _events.EventEmitter {
  receivedAck = false; // eslint-disable-next-line no-undef

  interval = 0;
  lastHeartBeatReceived = 0;
  lastHeartBeatSent = 0;

  constructor(id, client) {
    super();
    this.id = id;
    this.client = client;
    this.id = id;
    this.client = client;
    this.token = this.client.token;
    this.ws = null;
  }

  async connect(token) {
    if (token) this.token = token;
    this.ws = new _ws.default(_Constants.Constants.gateway, {});
    this.ws.on('open', () => {
      this.emit('connect', this.id);
      this.receivedAck = true;
    });
    this.ws.on('message', async data => {
      try {
        const PayLoad = _erlpack.default.unpack(data);

        const {
          t: event,
          op,
          d
        } = PayLoad;

        if (d !== null && d !== void 0 && d.user) {
          const clientUser = d.user;
          this.client.user = new _ClientUser.default(clientUser.id, clientUser.username, clientUser.discriminator, clientUser.avatar, clientUser.verified, clientUser.flags);
        }

        switch (op) {
          case 9:
            this.client.emit('error', new TypeError('Invalid gateway.'));
            break;

          case 10:
            const {
              heartbeat_interval
            } = d;
            this.lastHeartBeatReceived = Date.now();
            this.interval = await this.heartbeat(heartbeat_interval);
            this.identify(this.token);
            break;

          case 11:
            this.receivedAck = true;
            break;
        }

        if (event) {
          const Event = (0, _Resolve.resolveEvents)(event);

          if (Event) {
            try {
              const handler = new _EventHandler.default(this.client, PayLoad);
              const _event = Event;
              await handler[_event]();
            } catch {
              this.client.emit(Event);
            }
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
    this.ws.on('error', err => this.client.emit('error', err));
    this.ws.on('close', (code, reason) => {
      this.client.emit(_Events.Events.DEBUG, `WebSocket Closed:\n${JSON.stringify({
        code,
        reason
      })}`);
    });
  }

  updateStatus(afk, game, since, status) {
    var _this$ws;

    const data = _erlpack.default.pack({
      op: 3,
      d: {
        afk,
        game,
        since,
        status
      }
    });

    (_this$ws = this.ws) === null || _this$ws === void 0 ? void 0 : _this$ws.send(data);
  }

  identify(token) {
    var _this$ws2;

    _PayLoads.identify.d.intents = this.client.options.intents;
    _PayLoads.identify.d.token = token;

    const data = _erlpack.default.pack(_PayLoads.identify);

    (_this$ws2 = this.ws) === null || _this$ws2 === void 0 ? void 0 : _this$ws2.send(data);
    this.emit('ready');
  }

  async heartbeat(ms) {
    this.lastHeartBeatSent = Date.now();
    return setInterval(() => {
      var _this$ws3;

      (_this$ws3 = this.ws) === null || _this$ws3 === void 0 ? void 0 : _this$ws3.send(_erlpack.default.pack(_PayLoads.HeartBeat));
      this.client.emit(_Events.Events.DEBUG, `HeartBeat Sent:\n${JSON.stringify({
        lastHeartBeatReceived: this.lastHeartBeatReceived,
        lastHeartBeatSent: this.lastHeartBeatSent,
        interval: this.interval,
        timestamp: Date.now()
      })}`);
    }, ms);
  }

}

var _default = Shard;
exports.default = _default;