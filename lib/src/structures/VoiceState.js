"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../constants/Constants");
const defaultApplications = {
    youtube: '755600276941176913',
    poker: '755827207812677713',
    betrayal: '773336526917861400',
    fishing: '814288819477020702',
    chessdev: '832012586023256104',
    chess: '832012774040141894'
    // 'zombsroyale': '519338998791929866'  // Note : First package to offer ZombsRoyake.Io, any other package offering it will be clearly inspired by it, thanks to https://github.com/LilDerp-IsBetter thanks to whom i got the ZombsRoyale.io ID
};
class VoiceState {
    guild;
    _channel;
    user_id;
    _member;
    suppress;
    session_id;
    self_mute;
    self_deaf;
    deaf;
    mute;
    bot;
    id;
    userId;
    constructor(guild, _channel, user_id, _member, suppress, session_id, self_mute, self_deaf, deaf, mute) {
        this.guild = guild;
        this._channel = _channel;
        this.user_id = user_id;
        this._member = _member;
        this.suppress = suppress;
        this.session_id = session_id;
        this.self_mute = self_mute;
        this.self_deaf = self_deaf;
        this.deaf = deaf;
        this.mute = mute;
        this.bot = this.guild.bot;
        this.id = this.channel.id;
        this.userId = this.user_id;
    }
    get member() {
        return this._member || this.bot.guilds.get(this.guild.id)?.members.get(this.id) || null;
    }
    get channel() {
        return this._channel;
    }
    get sessionId() {
        return this.session_id;
    }
    get selfDeaf() {
        return this.self_deaf;
    }
    get selfMute() {
        return this.self_mute;
    }
    async createActivity(option, applications = defaultApplications) {
        const data = {
            code: null,
            toString() { return `https://discord.com/invite/${data.code}`; }
        };
        if (option && applications) {
            const appId = applications[option];
            const res = await this.bot.requestHandler('POST', `${Constants_1.EndPoints.channels}/${this.channel.id}/${Constants_1.EndPoints.invites}`, {
                max_age: 86400,
                max_uses: 0,
                target_application_id: appId,
                target_type: 2,
                temporary: false,
                validate: null
            });
            if (res.error || !res.code) {
                throw new Error(`An error occured while starting ${option} together.\nError: ${res.error}`);
            }
            data.code = `${res.code}`;
        }
        else
            throw new SyntaxError('Invalid option.');
        return data;
    }
}
exports.default = VoiceState;
