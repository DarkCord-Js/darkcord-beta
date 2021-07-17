"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const User_1 = tslib_1.__importDefault(require("../structures/User"));
const Member_1 = tslib_1.__importDefault(require("../structures/Member"));
const Role_1 = tslib_1.__importDefault(require("../structures/Role"));
const Guild_1 = tslib_1.__importDefault(require("../structures/Guild"));
const Types_1 = require("../types/Types");
const Message_1 = tslib_1.__importDefault(require("../structures/Message"));
const TextChannel_1 = tslib_1.__importDefault(require("../structures/channels/TextChannel"));
const Events_1 = require("../constants/Events");
const CacheManager_1 = tslib_1.__importDefault(require("../structures/cache/CacheManager"));
const Emoji_1 = tslib_1.__importDefault(require("../structures/Emoji"));
const Reaction_1 = tslib_1.__importDefault(require("../structures/Reaction"));
class Resolve {
    constructor(client) {
        this.client = client;
        this.cache = new CacheManager_1.default(this.client);
        return this;
    }
    resolveUser(user) {
        return new User_1.default(user?.id, user?.username, user?.discriminator, user?.avatar, user?.bot, user?.system, user?.mfa_enabled, user?.locale, user?.verified, user?.flags, user?.premium_type, user?.public_flags);
    }
    resolveEmoji(emoji) {
        const { id, name, roles, user, require_colons, managed, animated, avaible } = emoji;
        return new Emoji_1.default(id, name, roles, user, require_colons, managed, animated, avaible);
    }
    resolveMember(member, guildId) {
        const user = this.resolveUser(member.user);
        const { nick, joined_at, premium_since, avatar, muted, deaf } = member;
        return new Member_1.default(user.id, this.client, user, nick, joined_at, premium_since, deaf, muted, avatar, guildId);
    }
    resolveRole(role) {
        return new Role_1.default(role.id, role.name, role.color, role.hoist, role.position, role.permissions, role.managed, role.mentionable);
    }
    resolveGuild(guild) {
        const { id, name, icon, description, splash, discovery_splash, features, approximate_member_count, approximate_presence_count, emojis, stickers, banner, owner_id, application_id, region, afk_channel_id, afk_timeout, system_channel_id, widget_enabled, widget_channel_id, verification_level, roles, embed_channel_id, system_channel_flags, max_presences, mfa_level, max_video_channel_users, vanity_url_code, embed_enabled, default_message_notifications, rules_channel_id, premium_subscription_count, max_members, premium_tier, public_updates_channel_id, preferred_locale, explicit_content_filter, nsfw_level, members } = guild;
        const guildResolvable = new Guild_1.default(id, this.client, name, icon, description, splash, discovery_splash, features, banner, owner_id, region, application_id, afk_channel_id, afk_timeout, system_channel_id, widget_enabled, widget_channel_id, verification_level, default_message_notifications, mfa_level, explicit_content_filter, max_presences, max_members, max_video_channel_users, vanity_url_code, premium_tier, premium_subscription_count, system_channel_flags, preferred_locale, rules_channel_id, public_updates_channel_id, embed_enabled, embed_channel_id, stickers, nsfw_level, approximate_member_count, approximate_presence_count);
        for (const role of roles) {
            const rrole = this.resolveRole(role);
            guildResolvable.roles.set(rrole.id, role);
        }
        for (const emoji of emojis) {
            const remoji = this.resolveEmoji(emoji);
            guildResolvable.emojis.set(remoji.id, remoji);
        }
        for (const member of members) {
            const rmember = this.resolveMember(member, guildResolvable.id);
            guildResolvable.members.set(rmember.id, rmember);
        }
        return guildResolvable;
    }
    async resolveTextChannel(channel) {
        const client = this.client;
        const { id, type, name, last_message_id, last_pin_timestamp, position, parent_id, topic, guild_id, permission_overwrites, nsfw, rate_limit_per_user } = channel;
        let guild = client.guilds.get(guild_id);
        if (!guild) {
            guild = await client.rest.fetch.guild(guild_id);
        }
        return new TextChannel_1.default(id, client, type, last_message_id, last_pin_timestamp, name, position, parent_id, topic, guild, permission_overwrites, nsfw, rate_limit_per_user);
    }
    async resolveReaction(reaction) {
        const { user_id, channel_id, message_id, guild_id } = reaction;
        let user = this.client.users.get(user_id);
        let guild = this.client.guilds.get(guild_id);
        let channel = this.client.channels.get(channel_id);
        const emoji = this.resolveEmoji(reaction.emoji);
        let member;
        if (reaction.member) {
            member = this.resolveMember(reaction.member, guild_id);
        }
        if (!user) {
            user = await this.client.rest.fetch.user(user_id);
            user = this.resolveUser(user);
            this.cache.manage('users', user_id, user);
        }
        if (!guild) {
            guild = await this.client.rest.fetch.guild(guild_id);
            guild = this.resolveGuild(guild);
            this.cache.manage('guilds', guild_id, guild);
        }
        if (!channel) {
            channel = await this.client.rest.fetch.channel(channel_id);
            channel = await this.resolveTextChannel(channel);
            this.cache.manage('channels', channel_id, channel);
        }
        let message = await this.client.rest.fetch.message(channel_id, message_id);
        message = this.resolveMessage(message);
        return new Reaction_1.default(user, channel, message, guild, emoji, member);
    }
    async resolveMessage(message) {
        const client = this.client;
        const { channel_id, guild_id, author, embeds } = message;
        let channel = client.channels.get(channel_id);
        let guild = client.guilds.get(guild_id);
        let user = client.users.get(author?.id);
        let member = guild?.members?.get(author?.id);
        if (!channel) {
            channel = await client.rest.fetch.channel(channel_id);
        }
        const type = getChannelType(channel.type);
        if (type === Types_1.ChannelType.DM) {
            return null;
        }
        const typeDef = getChannelTypeDef(channel.type);
        if (typeDef === 'text') {
            channel = await this.resolveTextChannel(channel);
        }
        this.cache.manage('channels', channel.id, channel);
        if (!guild) {
            guild = await client.rest.fetch.guild(guild_id);
        }
        guild = this.resolveGuild(guild);
        this.cache.manage('guilds', guild.id, guild);
        if (!user) {
            user = await client.rest.fetch.user(author?.id);
        }
        user = this.resolveUser(user);
        this.cache.manage('users', user.id, user);
        if (!member) {
            member = await client.rest.fetch.member(guild_id, author?.id);
            member = this.resolveMember(member, guild_id);
            guild?.members?.set(member.user.id, member);
        }
        const resolvableMessage = this.resolveMessageInstance(message, client, channel, guild, user, member);
        resolvableMessage.embeds = embeds;
        return resolvableMessage;
    }
    resolveMessageInstance(message, client, channel, guild, user, member) {
        const { id, content, timestamp, edited_timestamp, tts, mention_everyone, nonce, pinned, type } = message;
        return new Message_1.default(client, id, channel, guild, user, member, content, timestamp, edited_timestamp, tts, mention_everyone, nonce, pinned, type);
    }
}
function getChannelType(type) {
    if (type === 0)
        return Types_1.ChannelType.TEXT;
    if (type === 1)
        return Types_1.ChannelType.DM;
    if (type === 2)
        return Types_1.ChannelType.VOICE;
    if (type === 3)
        return Types_1.ChannelType.DM;
    if (type === 4)
        return Types_1.ChannelType.CATEGORY;
    if (type === 5)
        return Types_1.ChannelType.NEWS;
    if (type === 6)
        return Types_1.ChannelType.STORE;
    return Types_1.ChannelType.UNKNOWN;
}
exports.getChannelType = getChannelType;
function getChannelTypeDef(type) {
    if (type === 0)
        return Types_1.ChannelTypeDef.TEXT;
    if (type === 1)
        return Types_1.ChannelTypeDef.DM;
    if (type === 2)
        return Types_1.ChannelTypeDef.VOICE;
    if (type === 3)
        return Types_1.ChannelTypeDef.DM;
    if (type === 4)
        return Types_1.ChannelTypeDef.CATEGORY;
    if (type === 5)
        return Types_1.ChannelTypeDef.NEWS;
    if (type === 6)
        return Types_1.ChannelTypeDef.STORE;
    return Types_1.ChannelTypeDef.UNKNOWN;
}
exports.getChannelTypeDef = getChannelTypeDef;
function resolveEvents(event) {
    const ev = event;
    return Events_1.Events[ev];
}
exports.resolveEvents = resolveEvents;
exports.default = Resolve;
