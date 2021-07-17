"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor(eventOptions, client) {
        this.client = client;
        this.options = {
            name: eventOptions.name
        };
    }
}
exports.default = Event;
