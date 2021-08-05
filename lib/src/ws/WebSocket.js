"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const events_1 = tslib_1.__importDefault(require("events"));
const ShardManager_1 = tslib_1.__importDefault(require("../gateway/ShardManager"));
/** DarkCord WebSocket Manager */
class WsManager extends events_1.default {
    bot;
    shards;
    constructor(bot) {
        super();
        this.bot = bot;
        this.shards = new ShardManager_1.default(this.bot);
    }
    /** Spawn Shards */
    async connect(shards) {
        try {
            for (let shard = 0; shard <= shards; ++shard) {
                this.shards.spawn(shard.toString());
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }
}
exports.default = WsManager;
