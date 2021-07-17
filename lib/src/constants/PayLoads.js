"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identify = exports.HeartBeat = exports.headers = void 0;
const headers = {
  'Content-Type': 'application/json',
  Authorization: ''
};
exports.headers = headers;
const HeartBeat = {
  op: 1,
  d: null
};
exports.HeartBeat = HeartBeat;
const identify = {
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
exports.identify = identify;