"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Resolve_1 = tslib_1.__importDefault(require("../util/Resolve"));
const Events_1 = require("../constants/Events");
class EventHandler {
    bot;
    shardId;
    resolve;
    payload;
    constructor(bot, payload, shardId = '0') {
        this.bot = bot;
        this.shardId = shardId;
        this.resolve = new Resolve_1.default(bot);
        const { d: event_payload } = payload;
        this.payload = event_payload;
    }
    async message() {
        const message = await this.resolve.resolveMessage(this.payload);
        if (!message?.author)
            return;
        this.bot.emit(Events_1.Events.MESSAGE_CREATE, message);
    }
    async guildCreate() {
        const guild = await this.resolve.resolveGuild(this.payload);
        this.bot.guilds.set(guild.id, guild);
        this.bot.emit(Events_1.Events.GUILD_CREATE, guild);
    }
    guildDelete() {
        this.bot.emit(Events_1.Events.GUILD_DELETE, this.payload.id);
    }
    memberUpdate() {
        const guildId = this.payload.guild_id;
        const updatedMember = this.resolve.resolveMember(this.payload, guildId);
        this.bot.guilds.get(guildId)?.members.set(updatedMember.id, updatedMember);
        this.bot.emit(Events_1.Events.GUILD_MEMBER_UPDATE, updatedMember);
    }
    memberAdd() {
        const guildId = this.payload.guild_id;
        const updatedMember = this.resolve.resolveMember(this.payload, guildId);
        this.bot.guilds.get(guildId)?.members.set(updatedMember.id, updatedMember);
        this.bot.emit(Events_1.Events.GUILD_MEMBER_UPDATE, updatedMember);
    }
    memberRemove() {
        const guildId = this.payload.guild_id;
        const user = this.resolve.resolveUser(this.payload.user);
        this.bot.emit(Events_1.Events.GUILD_MEMBER_REMOVE, user, guildId);
    }
    async messageDelete() {
        const guildId = this.payload.guild_id;
        const id = this.payload.id;
        const fchannel = await this.bot.rest.fetch.channel(this.payload.channel_id);
        const channel = await this.resolve.resolveTextChannel(fchannel);
        let guild;
        if (guildId) {
            guild = this.bot.guilds.get(guildId);
        }
        this.bot.emit(Events_1.Events.MESSAGE_DELETE, id, channel, guild);
    }
    async messageBulkDelete() {
        const guildId = this.payload.guild_id;
        const ids = this.payload.ids;
        const fchannel = await this.bot.rest.fetch.channel(this.payload.channel_id);
        const channel = await this.resolve.resolveTextChannel(fchannel);
        let guild;
        if (guildId) {
            guild = this.bot.guilds.get(guildId);
        }
        this.bot.emit(Events_1.Events.MESSAGE_DELETE, ids, channel, guild);
    }
    async typing() {
        const fchannel = await this.bot.rest.fetch.channel(this.payload.channel_id);
        const channel = await this.resolve.resolveTextChannel(fchannel);
        const fuser = await this.bot.rest.fetch.user(this.payload.user_id);
        const user = this.resolve.resolveUser(fuser);
        const guildId = this.payload.guild_id;
        let guild;
        if (guildId) {
            guild = this.bot.guilds.get(guildId);
        }
        if (this.payload.member) {
            this.resolve.resolveMember(this.payload.member, guildId);
        }
        const timestamp = this.payload.timestamp;
        this.bot.emit(Events_1.Events.TYPING_START, channel, user, timestamp, guild);
    }
    roleCreate() {
        const role = this.resolve.resolveRole(this.payload.role);
        const guild = this.bot.guilds.get(this.payload.guild_id);
        this.bot.emit(Events_1.Events.GUILD_ROLE_CREATE, role, guild);
    }
    roleUpdate() {
        const role = this.resolve.resolveRole(this.payload.role);
        const guild = this.bot.guilds.get(this.payload.guild_id);
        this.bot.emit(Events_1.Events.GUILD_ROLE_UPDATE, role, guild);
    }
    roleDelete() {
        const guild = this.bot.guilds.get(this.payload.guild_id);
        const roleId = this.payload.role_id;
        this.bot.emit(Events_1.Events.GUILD_ROLE_DELETE, roleId, guild);
    }
    async reactionRemoveEmoji() {
        const fchannel = await this.bot.rest.fetch.channel(this.payload.channel_id);
        const channel = await this.resolve.resolveChannel(fchannel);
        const fmessage = await this.bot.rest.fetch.message(channel?.id, this.payload.message_id);
        const message = await this.resolve.resolveMessage(fmessage);
        const emoji = this.resolve.resolveEmoji(this.payload.emoji);
        this.bot.emit(Events_1.Events.MESSAGE_REACTION_REMOVE_EMOJI, channel, message, emoji);
    }
    async reactionRemoveAll() {
        const fchannel = await this.bot.rest.fetch.channel(this.payload.channel_id);
        const channel = await this.resolve.resolveChannel(fchannel);
        const fmessage = await this.bot.rest.fetch.message(channel?.id, this.payload.message_id);
        const message = await this.resolve.resolveMessage(fmessage);
        const guildId = this.payload.guild_id;
        let guild;
        if (guildId) {
            guild = this.bot.guilds.get(guildId);
        }
        this.bot.emit(Events_1.Events.MESSAGE_REACTION_REMOVE_ALL, channel, message, guild);
    }
    async guildUpdate() {
        const guild = await this.resolve.resolveGuild(this.payload);
        this.bot.emit(Events_1.Events.GUILD_UPDATE, guild);
    }
    guildBan() {
        const guildId = this.payload.guild_id;
        const user = this.resolve.resolveUser(this.payload.user);
        this.bot.emit(Events_1.Events.GUILD_BAN_ADD, guildId, user);
    }
    guildBanRemove() {
        const guildId = this.payload.guild_id;
        const user = this.resolve.resolveUser(this.payload.user);
        this.bot.emit(Events_1.Events.GUILD_BAN_REMOVE, guildId, user);
    }
    ready() {
        for (const guild of this.payload.guilds) {
            this.bot.guilds.set(guild.id, guild);
            this.bot.guildShards.set(guild.id, this.shardId);
        }
        this.bot.emit(Events_1.Events.READY);
    }
    hello() {
        this.bot.emit(Events_1.Events.HELLO, this.payload.heartbeat_interval);
    }
    async voiceStateUpdate() {
        const voiceState = await this.resolve.resolveVoiceState(this.payload);
        if (voiceState?.guild)
            voiceState.guild?.voiceStates.set(voiceState.id, voiceState);
        this.bot.emit(Events_1.Events.VOICE_STATE_UPDATE, voiceState);
    }
    async interaction() {
        const interaction = await this.resolve.resolveInteraction(this.payload);
        this.bot.emit(Events_1.Events.INTERACTION_CREATE, interaction);
    }
    async reaction() {
        const reaction = await this.resolve.resolveReaction(this.payload);
        this.bot.emit(Events_1.Events.MESSAGE_REACTION_ADD, reaction);
    }
    async reactionRemove() {
        const reaction = await this.resolve.resolveReaction(this.payload);
        this.bot.emit(Events_1.Events.MESSAGE_REACTION_REMOVE, reaction);
    }
    async messageUpdate() {
        const message = await this.resolve.resolveMessage(this.payload);
        this.bot.emit(Events_1.Events.MESSAGE_UPDATE, message);
    }
}
exports.default = EventHandler;
