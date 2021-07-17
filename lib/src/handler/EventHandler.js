"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Resolve_1 = tslib_1.__importDefault(require("../util/Resolve"));
const Events_1 = require("../constants/Events");
class EventHandler {
    constructor(client, payload) {
        this.client = client;
        this.resolve = new Resolve_1.default(client);
        const { d: event_payload } = payload;
        this.payload = event_payload;
    }
    async message() {
        const message = await this.resolve.resolveMessage(this.payload);
        this.client.emit(Events_1.Events.MESSAGE_CREATE, message);
    }
    async guildCreate() {
        const guild = await this.resolve.resolveGuild(this.payload);
        this.client.emit(Events_1.Events.GUILD_CREATE, guild);
    }
    async guildDelete() {
        this.client.emit(Events_1.Events.GUILD_DELETE, this.payload.id);
    }
    async guildUpdate() {
        const guild = await this.resolve.resolveGuild(this.payload);
        this.client.emit(Events_1.Events.GUILD_UPDATE, guild);
    }
    guildBan() {
        const guildId = this.payload.guild_id;
        const user = this.resolve.resolveUser(this.payload.user);
        this.client.emit(Events_1.Events.GUILD_BAN_ADD, guildId, user);
    }
    guildBanRemove() {
        const guildId = this.payload.guild_id;
        const user = this.resolve.resolveUser(this.payload.user);
        this.client.emit(Events_1.Events.GUILD_BAN_REMOVE, guildId, user);
    }
    ready() {
        this.client.emit(Events_1.Events.READY);
    }
    async reaction() {
        const reaction = await this.resolve.resolveReaction(this.payload);
        this.client.emit(Events_1.Events.MESSAGE_REACTION_ADD, reaction);
    }
    async reactionRemove() {
        const reaction = await this.resolve.resolveReaction(this.payload);
        this.client.emit(Events_1.Events.MESSAGE_REACTION_REMOVE, reaction);
    }
}
exports.default = EventHandler;
