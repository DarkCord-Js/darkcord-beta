"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ACTIVITIES_1 = tslib_1.__importDefault(require("./ACTIVITIES"));
const FLAGS_1 = tslib_1.__importDefault(require("./FLAGS"));
const FOOD_1 = tslib_1.__importDefault(require("./FOOD"));
const NATURE_1 = tslib_1.__importDefault(require("./NATURE"));
const OBJECTS_1 = tslib_1.__importDefault(require("./OBJECTS"));
const PEOPLE_1 = tslib_1.__importDefault(require("./PEOPLE"));
const SYMBOLS_1 = tslib_1.__importDefault(require("./SYMBOLS"));
const TRAVEL_1 = tslib_1.__importDefault(require("./TRAVEL"));
const Emojis = {
    PEOPLE: PEOPLE_1.default,
    NATURE: NATURE_1.default,
    FOOD: FOOD_1.default,
    ACTIVITIES: ACTIVITIES_1.default,
    TRAVEL: TRAVEL_1.default,
    OBJECTS: OBJECTS_1.default,
    SYMBOLS: SYMBOLS_1.default,
    FLAGS: FLAGS_1.default
};
exports.default = Emojis;
