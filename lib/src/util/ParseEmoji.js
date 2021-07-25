"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Emoji_1 = tslib_1.__importDefault(require("../structures/Emoji"));
function parseEmoji(emoji) {
    if (typeof emoji === 'string') {
        if (emoji.includes('%')) {
            emoji = decodeURIComponent(emoji);
        }
        if (!emoji.includes(':')) {
            return {
                name: null,
                id: emoji,
                animated: false
            };
        }
        const m = emoji.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
        return m && {
            name: m[2],
            id: m[3],
            animated: Boolean(m[1])
        };
    }
    if (emoji instanceof Emoji_1.default) {
        return {
            name: emoji.name,
            id: emoji.id,
            animated: emoji.animated
        };
    }
}
exports.default = parseEmoji;
