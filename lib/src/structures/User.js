"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DFormats_1 = tslib_1.__importDefault(require("../util/DFormats"));
class User {
    constructor(_id, _username, _discrimator, _avatar, _bot = false, _system = false, _mfa = false, _locale = false, _verified = false, _flags = 0, _premiumType = 0, _publicFlags = 0) {
        this._id = _id;
        this._username = _username;
        this._discrimator = _discrimator;
        this._avatar = _avatar;
        this._bot = _bot;
        this._system = _system;
        this._mfa = _mfa;
        this._locale = _locale;
        this._verified = _verified;
        this._flags = _flags;
        this._premiumType = _premiumType;
        this._publicFlags = _publicFlags;
        return this;
    }
    get mention() {
        return DFormats_1.default.createUserMention(this.id);
    }
    get id() {
        return this._id;
    }
    get username() {
        return this._username;
    }
    get discrimator() {
        return this._discrimator;
    }
    get tag() {
        return `${this.username}#${this.discrimator}`;
    }
    get bot() {
        return this._bot;
    }
    get verified() {
        return this._verified;
    }
    get mfa() {
        return this._mfa;
    }
    get premiumType() {
        return this._premiumType;
    }
    get flags() {
        return this._flags;
    }
    get publicFlags() {
        return this._publicFlags;
    }
    /** Get user avatar */
    get avatar() {
        return this._avatar;
    }
    /** Get user avatar url */
    avatarURL({ format = 'webp', dynamic = false, size = '128' }) {
        if (dynamic)
            format = this.avatar.startsWith('a_') ? 'gif' : format;
        return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.${format}?${size}`;
    }
    toString() {
        return this.mention;
    }
}
exports.default = User;
