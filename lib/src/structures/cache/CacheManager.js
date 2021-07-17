"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CacheManager {
    constructor(client) {
        this.client = client;
    }
    manage(type, key, value) {
        if (this.client.options.cache[type]) {
            this.client[type].set(key, value);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = CacheManager;
