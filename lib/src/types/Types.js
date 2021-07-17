"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelTypeDef = exports.ChannelType = void 0;
let ChannelType;
exports.ChannelType = ChannelType;

(function (ChannelType) {
  ChannelType[ChannelType["TEXT"] = 0] = "TEXT";
  ChannelType[ChannelType["DM"] = 1] = "DM";
  ChannelType[ChannelType["VOICE"] = 2] = "VOICE";
  ChannelType[ChannelType["GROUP"] = 3] = "GROUP";
  ChannelType[ChannelType["CATEGORY"] = 4] = "CATEGORY";
  ChannelType[ChannelType["NEWS"] = 5] = "NEWS";
  ChannelType[ChannelType["STORE"] = 6] = "STORE";
  ChannelType[ChannelType["UNKNOWN"] = -1] = "UNKNOWN";
})(ChannelType || (exports.ChannelType = ChannelType = {}));

let ChannelTypeDef;
exports.ChannelTypeDef = ChannelTypeDef;

(function (ChannelTypeDef) {
  ChannelTypeDef[ChannelTypeDef["TEXT"] = 'text'] = "TEXT";
  ChannelTypeDef[ChannelTypeDef["DM"] = 'dm'] = "DM";
  ChannelTypeDef[ChannelTypeDef["VOICE"] = 'voice'] = "VOICE";
  ChannelTypeDef[ChannelTypeDef["GROUP"] = 'group'] = "GROUP";
  ChannelTypeDef[ChannelTypeDef["CATEGORY"] = 'category'] = "CATEGORY";
  ChannelTypeDef[ChannelTypeDef["NEWS"] = 'news'] = "NEWS";
  ChannelTypeDef[ChannelTypeDef["STORE"] = 'store'] = "STORE";
  ChannelTypeDef[ChannelTypeDef["UNKNOWN"] = 'unknown'] = "UNKNOWN";
})(ChannelTypeDef || (exports.ChannelTypeDef = ChannelTypeDef = {}));