"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DFormats_1 = tslib_1.__importDefault(require("../util/DFormats"));
const Collection_1 = tslib_1.__importDefault(require("../collection/Collection"));
class Member {
    _id;
    bot;
    _user;
    _nickname;
    _joinedDate;
    _boosterSince;
    _deaf;
    _muted;
    _avatar;
    _guildId;
    rolesIds;
    _roles;
    constructor(_id, bot, _user, _nickname, _joinedDate, _boosterSince, _deaf = false, _muted = false, _avatar, _guildId, rolesIds) {
        this._id = _id;
        this.bot = bot;
        this._user = _user;
        this._nickname = _nickname;
        this._joinedDate = _joinedDate;
        this._boosterSince = _boosterSince;
        this._deaf = _deaf;
        this._muted = _muted;
        this._avatar = _avatar;
        this._guildId = _guildId;
        this.rolesIds = rolesIds;
        this._roles = new Collection_1.default();
        return this;
    }
    get mention() {
        return DFormats_1.default.createUserMention(this.id);
    }
    get id() {
        return this._id;
    }
    get nickname() {
        return this._nickname;
    }
    get permissions() {
        return this.guild?.permissionsOf(this.id);
    }
    get joinedDate() {
        return this._joinedDate;
    }
    get boosterSince() {
        return this._boosterSince;
    }
    get deaf() {
        return this._deaf;
    }
    get muted() {
        return this._muted;
    }
    get user() {
        return this._user;
    }
    get avatar() {
        return this._avatar;
    }
    get guild() {
        return this.bot.guilds.get(this._guildId);
    }
    get voiceState() {
        return this.guild?.voiceStates.get(this.id);
    }
    async ban(reason, days = 0) {
        return await this.bot.rest.banMember(this._guildId, this.id, days, reason);
    }
    avatarURL({ format = 'webp', dynamic = false, size = '128' }) {
        if (dynamic)
            format = this.avatar.startsWith('a_') ? 'gif' : format;
        return `https://cdn.discordapp.com/guilds/${this._guildId}/users/${this.id}/avatars/${this.avatar}.${format}?${size}`;
    }
    get roles() {
        this.findMemberRoles();
        return this._roles;
    }
    findMemberRoles() {
        for (const roleId of this.rolesIds) {
            this.guild?.roles
                .filter((role) => role.id === roleId)
                .forEach((role) => {
                this._roles.set(role.id, role);
            });
        }
    }
    toString() {
        return this.mention;
    }
}
exports.default = Member;
