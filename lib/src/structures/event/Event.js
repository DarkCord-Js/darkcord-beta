"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    bot;
    options;
    constructor(eventOptions, bot) {
        this.bot = bot;
        this.options = {
            name: eventOptions.name
        };
    }
}
exports.default = Event;
