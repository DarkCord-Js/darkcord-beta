"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const Multipart_1 = tslib_1.__importDefault(require("./Multipart"));
class Attachment {
    data;
    isBuffer;
    isString;
    multi;
    file;
    constructor(data) {
        this.data = data;
        this.isBuffer = (data.file instanceof Buffer);
        this.isString = (typeof data.file === 'string');
        this.multi = new Multipart_1.default();
        if (this.isBuffer) {
            this.file = data.file;
        }
        if (this.isString) {
            if (data.file.includes('http' || 'https')) {
                node_fetch_1.default(data.file).then(async (res) => {
                    this.file = await res.buffer();
                });
            }
            else {
                try {
                    this.file = fs_1.default.readFileSync(data.file);
                }
                catch {
                    throw new Error(`File does not exists: ${data.file}`);
                }
            }
        }
    }
}
exports.default = Attachment;
