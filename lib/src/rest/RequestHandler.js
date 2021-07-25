"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Constants_1 = require("../constants/Constants");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
async function RequestHandler(client, headers, method, endpoint, data) {
    const init = {
        method,
        headers
    };
    if (data) {
        init.body = typeof data === 'string' ? data : JSON.stringify(data);
    }
    const req = await node_fetch_1.default(`${Constants_1.Constants.API}${endpoint.startsWith('/') ? `${endpoint}` : `/${endpoint}`}`, init);
    return req.json();
}
exports.default = RequestHandler;
