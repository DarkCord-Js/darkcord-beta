"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Constants_1 = require("../constants/Constants");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const path_1 = tslib_1.__importDefault(require("path"));
async function RequestHandler(bot, headers, method, endpoint, data) {
    const init = {
        method,
        headers
    };
    if (data) {
        if ('file' in data) {
            init.headers['Content-Type'] = `multipart/form-data; boundary=${data.file.multi.boundary}`;
            if (Array.isArray(data.file)) {
                data.file.forEach((f) => {
                    const file = f;
                    const d = [
                        ['file', file.file, file.data.filename || path_1.default.basename(file.data.file)]
                    ];
                    for (const [key, value] of Object.entries(data)) {
                        if (key !== 'file')
                            d.push([key, value]);
                    }
                });
                init.body = data.file[0].multi.finalize().result;
            }
            else {
                const file = data.file;
                const d = [
                    ['file', file.file, file.data.filename || path_1.default.basename(file.data.file)]
                ];
                for (const [key, value] of Object.entries(data)) {
                    if (key !== 'file')
                        d.push([key, value]);
                }
                d.forEach(data.file.multi.append, data.file.multi);
                init.body = data.file.multi.finalize().result;
            }
        }
        else {
            init.body = typeof data === 'string' ? data : JSON.stringify(data);
        }
    }
    const req = await node_fetch_1.default(`${Constants_1.Constants.API}${endpoint.startsWith('/') ? `${endpoint}` : `/${endpoint}`}`, init);
    try {
        const json = await req.json();
        if (json.message) {
            if (json.errors.guild_id)
                return json;
            else
                bot.emit('error', json);
        }
        return json;
    }
    catch {
        return req;
    }
}
exports.default = RequestHandler;
