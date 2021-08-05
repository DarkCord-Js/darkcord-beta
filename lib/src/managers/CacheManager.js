"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CacheManager {
    bot;
    constructor(bot) {
        this.bot = bot;
    }
    manage(type, key, value) {
        if (this.bot.options.cache[type]) {
            this.bot[type].set(key, value);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = CacheManager;
