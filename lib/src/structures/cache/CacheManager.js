"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class CacheManager {
  constructor(client) {
    this.client = client;
    this.client = client;
  }

  manage(type, key, value) {
    if (this.client.options.cache[type]) {
      this.client[type].set(key, value);
      return true;
    } else {
      return false;
    }
  }

}

var _default = CacheManager;
exports.default = _default;