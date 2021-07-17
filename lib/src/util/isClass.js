"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isClass(input) {
  return typeof input === 'function' && typeof input.prototype === 'object' && input.toString().substring(0, 5) === 'class';
}

var _default = isClass;
exports.default = _default;