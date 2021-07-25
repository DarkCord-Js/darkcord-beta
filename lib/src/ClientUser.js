"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientUser {
    _id;
    _username;
    _discriminator;
    _avatar;
    _verified;
    _flags;
    constructor(_id, _username, _discriminator, _avatar, _verified, _flags) {
        this._id = _id;
        this._username = _username;
        this._discriminator = _discriminator;
        this._avatar = _avatar;
        this._verified = _verified;
        this._flags = _flags;
        return this;
    }
    get flags() {
        return this._flags;
    }
    get id() {
        return this._id;
    }
    get username() {
        return this._username;
    }
    get discriminator() {
        return this._discriminator;
    }
    get avatar() {
        return this._avatar;
    }
    get verified() {
        return this._verified;
    }
    get tag() {
        return `${this.username}#${this.discriminator}`;
    }
    avatarURL({ format = 'webp', dynamic = false, size = '128' }) {
        if (dynamic)
            format = this.avatar.startsWith('a_') ? 'gif' : format;
        return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.${format}?${size}`;
    }
}
exports.default = ClientUser;
