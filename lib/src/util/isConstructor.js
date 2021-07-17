"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isConstructor(input) {
  try {
    // eslint-disable-next-line no-new
    new input();
    return true;
  } catch {
    return false;
  }
}

var _default = isConstructor;
exports.default = _default;