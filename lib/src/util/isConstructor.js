"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isConstructor(input) {
    try {
        // eslint-disable-next-line no-new
        new input();
        return true;
    }
    catch {
        return false;
    }
}
exports.default = isConstructor;
