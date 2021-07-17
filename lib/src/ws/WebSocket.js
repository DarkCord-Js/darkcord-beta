"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = _interopRequireDefault(require("events"));

var _ShardManager = _interopRequireDefault(require("../gateway/ShardManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** DarkCord WebSocket Manager */
class WsManager extends _events.default {
  constructor(client) {
    super();
    this.client = client;
    this.client = client;
    this.shards = new _ShardManager.default(this.client);
  }
  /** Spawn Shards */


  async connect(shards) {
    try {
      for (let shard = 0; shard <= shards; ++shard) {
        this.shards.spawn(shard.toString());
      }
    } catch (err) {
      throw new Error(err);
    }
  }

}

var _default = WsManager;
exports.default = _default;