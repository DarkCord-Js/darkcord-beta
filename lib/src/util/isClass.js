"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isClass(input) {
    return typeof input === 'function' &&
        typeof input.prototype === 'object' &&
        input.toString().substring(0, 5) === 'class';
}
exports.default = isClass;
