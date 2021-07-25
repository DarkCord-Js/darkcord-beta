"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ParseEmoji_1 = tslib_1.__importDefault(require("../util/ParseEmoji"));
const Resolve_1 = require("../util/Resolve");
const Emoji_1 = tslib_1.__importDefault(require("./Emoji"));
class Button {
    options;
    type = 2;
    style = 1;
    label;
    emoji;
    url;
    custom_id;
    disabled = false;
    constructor(options) {
        this.options = options;
        this.buildButton;
    }
    setLabel(label) {
        this.label = label;
        return this;
    }
    setEmoji(emoji) {
        if (typeof emoji === 'string') {
            emoji = Resolve_1.resolveParseEmoji(emoji);
        }
        if (emoji instanceof Emoji_1.default) {
            emoji = ParseEmoji_1.default(emoji);
        }
        this.emoji = emoji;
        return this;
    }
    setCustomId(customId) {
        if (this.style === 5)
            throw new Error('Link buttons do not use custom id');
        this.custom_id = customId;
        return this;
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    setDisabled(disabled) {
        this.disabled = disabled;
        return this;
    }
    setStyle(style) {
        if (typeof style === 'string') {
            this.style = this.resolveStyle(style);
        }
        else {
            this.style = style;
        }
        return this;
    }
    resolveStyle(style) {
        switch (style) {
            case 'Primary':
                return 1;
            case 'Secondary':
                return 2;
            case 'Success':
                return 3;
            case 'Danger':
                return 4;
            case 'Link':
                return 5;
        }
    }
    get buildButton() {
        this.style = this.options?.syle ?? 1;
        this.disabled = this.options?.disabled ?? false;
        return this;
    }
    toString() {
        return '[DarkCord<Button>]';
    }
}
exports.default = Button;
