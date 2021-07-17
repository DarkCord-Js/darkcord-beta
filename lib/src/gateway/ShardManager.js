"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Collection = _interopRequireDefault(require("../collection/Collection"));

var _Shard = _interopRequireDefault(require("./Shard"));

var _Events = require("../constants/Events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShardManager extends _Collection.default {
  constructor(client) {
    super();
    this.client = client;
    this.client = client;
  }

  spawn(id) {
    let shard = this.get(id);

    if (!shard) {
      var _shard;

      try {
        shard = new _Shard.default(id, this.client);
        this.set(id, shard);
        shard.connect(this.client.token);
      } catch (err) {
        throw new Error(err);
      }

      (_shard = shard) === null || _shard === void 0 ? void 0 : _shard.on('ready', () => {
        var _shard2;

        this.client.emit(_Events.Events.SHARD_READY, (_shard2 = shard) === null || _shard2 === void 0 ? void 0 : _shard2.id);
      });
    }
  }

}

var _default = ShardManager;
exports.default = _default;