"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Resolve_1 = tslib_1.__importDefault(require("../util/Resolve"));
class Invite {
    bot;
    _code;
    _guild;
    _channel;
    _inviter;
    _approximate_presence_count;
    _approximate_member_count;
    constructor(bot, _code, _guild, _channel, _inviter, _approximate_presence_count, _approximate_member_count) {
        this.bot = bot;
        this._code = _code;
        this._guild = _guild;
        this._channel = _channel;
        this._inviter = _inviter;
        this._approximate_presence_count = _approximate_presence_count;
        this._approximate_member_count = _approximate_member_count;
    }
    /** Invite code */
    get code() {
        return this._code;
    }
    /** Invite Channel */
    get channel() {
        const resolve = new Resolve_1.default(this.bot);
        return resolve.resolveChannel(this._channel)
            .then((channel) => channel);
    }
    get inviter() {
        const resolve = new Resolve_1.default(this.bot);
        return resolve.resolveUser(this._inviter);
    }
    presenceCount() {
        return this._approximate_presence_count;
    }
    memberCount() {
        return this._approximate_member_count;
    }
}
exports.default = Invite;
