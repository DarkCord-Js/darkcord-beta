"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DFormats = {
    createTimestamp: (time) => {
        return `<t:${time}>`;
    },
    createStyledTimestamp: (time, style = 't') => {
        return `<t:${time}:${style}>`;
    },
    createUserMention: (userId) => {
        return `<@${userId}>`;
    },
    createRoleMention: (roleId) => {
        return `<@&${roleId}>`;
    },
    createChannelMention: (channelId) => {
        return `<@#${channelId}>`;
    },
    createEmojiCode: (emojiName, emojiId) => {
        return `<:${emojiName}:${emojiId}>`;
    },
    createAnimatedEmojiCode: (emojiName, emojiId) => {
        return `<a:${emojiName}:${emojiId}>`;
    }
};
exports.default = DFormats;
