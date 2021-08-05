"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Collection_1 = tslib_1.__importDefault(require("../collection/Collection"));
const Shard_1 = tslib_1.__importDefault(require("./Shard"));
const Events_1 = require("../constants/Events");
class ShardManager extends Collection_1.default {
    bot;
    constructor(bot) {
        super();
        this.bot = bot;
    }
    spawn(id) {
        let shard = this.get(id);
        if (!shard) {
            try {
                shard = new Shard_1.default(id, this.bot);
                this.set(id, shard);
                shard.connect(this.bot.token);
            }
            catch (err) {
                throw new Error(err);
            }
            shard?.on('ready', () => {
                this.bot.emit(Events_1.Events.SHARD_READY, shard?.id);
            });
        }
    }
}
exports.default = ShardManager;
