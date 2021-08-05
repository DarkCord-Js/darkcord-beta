"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identify = exports.HeartBeat = exports.headers = void 0;
exports.headers = {
    'Content-Type': 'application/json',
    'User-Agent': `DarkCord(${require('../../../package.json').version}) Bot `,
    'Accept-Encoding': 'gzip,deflate',
    'X-RateLimit-Precision': 'millisecond',
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
