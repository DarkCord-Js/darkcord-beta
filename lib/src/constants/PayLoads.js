"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headers = {
    'Content-Type': 'application/json',
    Authorization: ''
};
exports.HeartBeat = {
    op: 1,
    d: null
};
exports.identify = {
    op: 2,
    d: {
        token: '',
        properties: {
            $os: process.platform,
            $device: 'DarkCord',
            $browser: 'DarkCord'
        },
        intents: 0
    }
};
