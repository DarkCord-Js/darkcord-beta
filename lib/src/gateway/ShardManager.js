"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Collection_1 = tslib_1.__importDefault(require("../collection/Collection"));
const Shard_1 = tslib_1.__importDefault(require("./Shard"));
const Events_1 = require("../constants/Events");
class ShardManager extends Collection_1.default {
    constructor(client) {
        super();
        this.client = client;
    }
    spawn(id) {
        let shard = this.get(id);
        if (!shard) {
            try {
                shard = new Shard_1.default(id, this.client);
                this.set(id, shard);
                shard.connect(this.client.token);
            }
            catch (err) {
                throw new Error(err);
            }
            shard?.on('ready', () => {
                this.client.emit(Events_1.Events.SHARD_READY, shard?.id);
            });
        }
    }
}
exports.default = ShardManager;
