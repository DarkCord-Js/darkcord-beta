"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionCallTypeDef = exports.InteractionCallType = exports.InteractionType = exports.ChannelTypeDef = exports.ChannelType = void 0;
var ChannelType;
(function (ChannelType) {
    ChannelType[ChannelType["TEXT"] = 0] = "TEXT";
    ChannelType[ChannelType["DM"] = 1] = "DM";
    ChannelType[ChannelType["VOICE"] = 2] = "VOICE";
    ChannelType[ChannelType["GROUP"] = 3] = "GROUP";
    ChannelType[ChannelType["CATEGORY"] = 4] = "CATEGORY";
    ChannelType[ChannelType["NEWS"] = 5] = "NEWS";
    ChannelType[ChannelType["STORE"] = 6] = "STORE";
    ChannelType[ChannelType["NEWS_THREAD"] = 10] = "NEWS_THREAD";
    ChannelType[ChannelType["PUBLIC_THREAD"] = 11] = "PUBLIC_THREAD";
    ChannelType[ChannelType["PRIVATE_THREAD"] = 12] = "PRIVATE_THREAD";
    ChannelType[ChannelType["STAGE_VOICE"] = 13] = "STAGE_VOICE";
    ChannelType[ChannelType["UNKNOWN"] = -1] = "UNKNOWN";
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));
var ChannelTypeDef;
(function (ChannelTypeDef) {
    ChannelTypeDef["TEXT"] = "text";
    ChannelTypeDef["DM"] = "dm";
    ChannelTypeDef["VOICE"] = "voice";
    ChannelTypeDef["GROUP"] = "group";
    ChannelTypeDef["CATEGORY"] = "category";
    ChannelTypeDef["NEWS"] = "news";
    ChannelTypeDef["STORE"] = "store";
    ChannelTypeDef["NEWS_THREAD"] = "newsThread";
    ChannelTypeDef["PUBLIC_THREAD"] = "publicThread";
    ChannelTypeDef["PRIVATE_THREAD"] = "privateThread";
    ChannelTypeDef["STAGE_VOICE"] = "stageVoice";
    ChannelTypeDef["UNKNOWN"] = "unknown";
})(ChannelTypeDef = exports.ChannelTypeDef || (exports.ChannelTypeDef = {}));
var InteractionType;
(function (InteractionType) {
    InteractionType[InteractionType["PING"] = 1] = "PING";
    InteractionType[InteractionType["APPLICATION_COMMAND"] = 2] = "APPLICATION_COMMAND";
    InteractionType[InteractionType["MESSAGE_COMPONENT"] = 3] = "MESSAGE_COMPONENT";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));
var InteractionCallType;
(function (InteractionCallType) {
    InteractionCallType[InteractionCallType["PONG"] = 1] = "PONG";
    InteractionCallType[InteractionCallType["CHANNEL_MESSAGE_WITH_SOURCE"] = 4] = "CHANNEL_MESSAGE_WITH_SOURCE";
    InteractionCallType[InteractionCallType["DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE"] = 5] = "DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE";
    InteractionCallType[InteractionCallType["DEFERRED_UPDATE_MESSAGE"] = 6] = "DEFERRED_UPDATE_MESSAGE";
    InteractionCallType[InteractionCallType["UPDATE_MESSAGE"] = 7] = "UPDATE_MESSAGE";
})(InteractionCallType = exports.InteractionCallType || (exports.InteractionCallType = {}));
var InteractionCallTypeDef;
(function (InteractionCallTypeDef) {
    InteractionCallTypeDef["PONG"] = "pong";
    InteractionCallTypeDef["CHANNEL_MESSAGE_WITH_SOURCE"] = "channelMessageWithSource";
    InteractionCallTypeDef["DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE"] = "deferredChannelMessageWithSource";
    InteractionCallTypeDef["DEFERRED_UPDATE_MESSAGE"] = "deferredUpdateMessage";
    InteractionCallTypeDef["UPDATE_MESSAGE"] = "updateMessage";
})(InteractionCallTypeDef = exports.InteractionCallTypeDef || (exports.InteractionCallTypeDef = {}));
