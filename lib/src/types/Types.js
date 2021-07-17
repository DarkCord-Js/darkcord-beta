"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChannelType;
(function (ChannelType) {
    ChannelType[ChannelType["TEXT"] = 0] = "TEXT";
    ChannelType[ChannelType["DM"] = 1] = "DM";
    ChannelType[ChannelType["VOICE"] = 2] = "VOICE";
    ChannelType[ChannelType["GROUP"] = 3] = "GROUP";
    ChannelType[ChannelType["CATEGORY"] = 4] = "CATEGORY";
    ChannelType[ChannelType["NEWS"] = 5] = "NEWS";
    ChannelType[ChannelType["STORE"] = 6] = "STORE";
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
    ChannelTypeDef["UNKNOWN"] = "unknown";
})(ChannelTypeDef = exports.ChannelTypeDef || (exports.ChannelTypeDef = {}));
