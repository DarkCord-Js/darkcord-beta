"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ParseEmoji_1 = tslib_1.__importDefault(require("../util/ParseEmoji"));
const Resolve_1 = require("../util/Resolve");
const Emoji_1 = tslib_1.__importDefault(require("./Emoji"));
class SelectMenu {
    type = 3;
    custom_id;
    placeholder;
    min_values;
    max_values;
    options = [];
    contructor() {
        return this.createMenu;
    }
    setCustomId(customId) {
        this.custom_id = customId;
        return this;
    }
    setPlaceholder(placeholder) {
        this.placeholder = placeholder;
        return this;
    }
    setMinValues(minValues) {
        this.min_values = minValues;
        return this;
    }
    setMaxValues(maxValues) {
        this.max_values = maxValues;
        return this;
    }
    addOption(label, value, description, emoji, _default = false) {
        if (typeof emoji === 'string') {
            emoji = Resolve_1.resolveParseEmoji(emoji);
        }
        if (emoji instanceof Emoji_1.default) {
            emoji = ParseEmoji_1.default(emoji);
        }
        if (emoji) {
            if (!emoji?.name) {
                throw new Error('The emoji needs a name.');
            }
        }
        this.options.push({
            label,
            value,
            description,
            emoji,
            default: _default
        });
        return this;
    }
    addOptions(...options) {
        for (const option of options) {
            this.options.push(option);
        }
        return this;
    }
    get createMenu() {
        this.type = 3;
        return this;
    }
    toString() {
        return '[DarkCord<SelectMenu>]';
    }
}
exports.default = SelectMenu;
