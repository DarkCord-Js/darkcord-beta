"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveEvents = exports.resolveParseEmoji = exports.getInteractionType = exports.getChannelTypeDef = exports.getChannelType = void 0;
const tslib_1 = require("tslib");
const User_1 = tslib_1.__importDefault(require("../structures/User"));
const Member_1 = tslib_1.__importDefault(require("../structures/Member"));
const Role_1 = tslib_1.__importDefault(require("../structures/Role"));
const Guild_1 = tslib_1.__importDefault(require("../structures/Guild"));
const Types_1 = require("../types/Types");
const Message_1 = tslib_1.__importDefault(require("../structures/Message"));
const TextChannel_1 = tslib_1.__importDefault(require("../structures/channels/TextChannel"));
const Events_1 = require("../constants/Events");
const CacheManager_1 = tslib_1.__importDefault(require("../managers/CacheManager"));
const Emoji_1 = tslib_1.__importDefault(require("../structures/Emoji"));
const Reaction_1 = tslib_1.__importDefault(require("../structures/Reaction"));
const ThreadChannel_1 = tslib_1.__importDefault(require("../structures/channels/ThreadChannel"));
const Interaction_1 = tslib_1.__importDefault(require("../structures/Interaction"));
const CategoryChannel_1 = tslib_1.__importDefault(require("../structures/channels/CategoryChannel"));
const ParseEmoji_1 = tslib_1.__importDefault(require("./ParseEmoji"));
const Invite_1 = tslib_1.__importDefault(require("../structures/Invite"));
const VoiceChannel_1 = tslib_1.__importDefault(require("../structures/channels/VoiceChannel"));
const VoiceState_1 = tslib_1.__importDefault(require("../structures/VoiceState"));
class Resolve {
    bot;
    cache;
    constructor(bot) {
        this.bot = bot;
        this.cache = new CacheManager_1.default(this.bot);
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
        const { nick, joined_at, premium_since, avatar, muted, deaf, roles } = member;
        const rmember = new Member_1.default(user.id, this.bot, user, nick, joined_at, premium_since, deaf, muted, avatar, guildId, roles);
        /* if (roles && roles !== []) {
          for (const role of roles) {
            const guild = rmember.guild
            const rroles = guild?.roles.filter((r) => r.id === role)
    
            if (rroles) {
              for (const rrole of rroles) {
                rmember.roles.set(rrole.id, rrole)
              }
            }
          }
        } */
        return rmember;
    }
    resolveInvite(invite) {
        const guild = this.resolveGuild(invite.guild);
        return new Invite_1.default(this.bot, invite.code, guild, invite.channel, invite.inviter, invite.approximate_presence_count, invite.approximate_member_count);
    }
    resolveRole(role) {
        return new Role_1.default(role.id, role.name, role.color, role.hoist, role.position, role.permissions, role.managed, role.mentionable, role.permissions_new);
    }
    resolveGuild(guild) {
        const { id, name, icon, description, splash, discovery_splash, features, approximate_member_count, approximate_presence_count, emojis, stickers, banner, owner_id, application_id, region, afk_channel_id, afk_timeout, system_channel_id, widget_enabled, widget_channel_id, verification_level, roles, embed_channel_id, system_channel_flags, max_presences, mfa_level, max_video_channel_users, vanity_url_code, embed_enabled, default_message_notifications, rules_channel_id, premium_subscription_count, max_members, premium_tier, public_updates_channel_id, preferred_locale, explicit_content_filter, nsfw_level, members } = guild;
        const guildResolvable = new Guild_1.default(id, this.bot, name, icon, description, splash, discovery_splash, features, banner, owner_id, region, application_id, afk_channel_id, afk_timeout, system_channel_id, widget_enabled, widget_channel_id, verification_level, default_message_notifications, mfa_level, explicit_content_filter, max_presences, max_members, max_video_channel_users, vanity_url_code, premium_tier, premium_subscription_count, system_channel_flags, preferred_locale, rules_channel_id, public_updates_channel_id, embed_enabled, embed_channel_id, stickers, nsfw_level, approximate_member_count, approximate_presence_count);
        if (roles) {
            for (const role of roles) {
                const rrole = this.resolveRole(role);
                guildResolvable.roles.set(rrole.id, rrole);
            }
        }
        if (emojis) {
            for (const emoji of emojis) {
                const remoji = this.resolveEmoji(emoji);
                guildResolvable.emojis.set(remoji.id, remoji);
            }
        }
        if (members) {
            for (const member of members) {
                const rmember = this.resolveMember(member, id);
                guildResolvable.members.set(rmember.user.id, rmember);
            }
        }
        return guildResolvable;
    }
    async resolveTextChannel(channel) {
        const bot = this.bot;
        const { id, type, name, last_message_id, last_pin_timestamp, position, parent_id, topic, guild_id, permission_overwrites, nsfw, rate_limit_per_user } = channel;
        let guild = bot.guilds.get(guild_id);
        if (!guild) {
            guild = await bot.rest.fetch.guild(guild_id);
            guild = this.resolveGuild(guild);
            this.cache.manage('guilds', guild.id, guild);
        }
        return new TextChannel_1.default(id, bot, type, last_message_id, last_pin_timestamp, name, position, parent_id, topic, guild, permission_overwrites, nsfw, rate_limit_per_user);
    }
    async resolveThreadChannel(channel) {
        const { id, type, name, last_message_id, last_pin_timestamp, position, parent_id, topic, guild_id, permission_overwrites, nsfw, rate_limit_per_user, thread_metadata } = channel;
        let guild = this.bot.guilds.get(guild_id);
        if (!guild) {
            guild = await this.bot.rest.fetch.guild(guild_id);
            guild = this.resolveGuild(guild);
            this.cache.manage('guilds', guild.id, guild);
        }
        return new ThreadChannel_1.default(id, this.bot, type, name, last_message_id, last_pin_timestamp, position, parent_id, topic, guild, permission_overwrites, nsfw, rate_limit_per_user, thread_metadata);
    }
    async resolveReaction(reaction) {
        const { user_id, channel_id, message_id, guild_id } = reaction;
        let user = this.bot.users.get(user_id);
        let guild = this.bot.guilds.get(guild_id);
        let channel = this.bot.channels.get(channel_id);
        const emoji = this.resolveEmoji(reaction.emoji);
        let member;
        if (reaction.member) {
            member = this.resolveMember(reaction.member, guild_id);
        }
        if (!user) {
            user = await this.bot.rest.fetch.user(user_id);
            user = this.resolveUser(user);
            this.cache.manage('users', user_id, user);
        }
        if (!guild) {
            guild = await this.bot.rest.fetch.guild(guild_id);
            guild = this.resolveGuild(guild);
            this.cache.manage('guilds', guild_id, guild);
        }
        if (!channel) {
            channel = await this.bot.rest.fetch.channel(channel_id);
            channel = await this.resolveTextChannel(channel);
            this.cache.manage('channels', channel_id, channel);
        }
        let message = await this.bot.rest.fetch.message(channel_id, message_id);
        message = this.resolveMessage(message);
        return new Reaction_1.default(user, channel, message, guild, emoji, member);
    }
    async resolveCategoryChannel(channel) {
        const { id, type, name, last_message_id, last_pin_timestamp, position, parent_id, topic, guild_id, permission_overwrites, nsfw, rate_limit_per_user } = channel;
        let guild = this.bot.guilds.get(guild_id);
        if (!guild) {
            guild = await this.bot.rest.fetch.guild(guild_id);
            guild = this.resolveGuild(guild);
            this.cache.manage('guilds', guild.id, guild);
        }
        return new CategoryChannel_1.default(id, this.bot, type, name, last_message_id, last_pin_timestamp, position, parent_id, topic, guild, permission_overwrites, nsfw, rate_limit_per_user);
    }
    async resolveNewsChannel(channel) {
        const { id, type, name, last_message_id, last_pin_timestamp, position, parent_id, topic, guild_id, permission_overwrites, nsfw, rate_limit_per_user } = channel;
        let guild = this.bot.guilds.get(guild_id);
        if (!guild) {
            guild = await this.bot.rest.fetch.guild(guild_id);
            guild = this.resolveGuild(guild);
            this.cache.manage('guilds', guild.id, guild);
        }
        return new TextChannel_1.default(id, this.bot, type, last_message_id, last_pin_timestamp, name, position, parent_id, topic, guild, permission_overwrites, nsfw, rate_limit_per_user);
    }
    async resolveVoiceChannel(channel) {
        let guild = this.bot.guilds.get(channel.guild_id);
        if (!guild) {
            guild = await this.bot.rest.fetch.guild(channel.guild_id);
            guild = this.resolveGuild(guild);
            this.cache.manage('guilds', guild.id, guild);
        }
        return new VoiceChannel_1.default(this.bot, channel.id, channel.name, channel.type, guild, channel.bitrate, channel.rtc_region, channel.user_limit, channel.user_id);
    }
    async resolveVoiceState(voiceState) {
        const channel = await this.bot.getChannel(voiceState.channel_id);
        const member = this.resolveMember(voiceState.member, channel.guild.id);
        return new VoiceState_1.default(channel.guild, channel, voiceState.user_id, member, voiceState.suppress, voiceState.session_id, voiceState.self_mute, voiceState.self_deaf, voiceState.deaf, voiceState.mute);
    }
    async resolveChannel(channel) {
        switch (channel.type) {
            case 0:
                return await this.resolveTextChannel(channel);
            case 1:
                return await this.resolveTextChannel(channel);
            case 2:
                return await this.resolveVoiceChannel(channel);
            case 3:
                return await this.resolveTextChannel(channel);
            case 4:
                return await this.resolveCategoryChannel(channel);
            case 5:
                return await this.resolveNewsChannel(channel);
            default:
                return null;
        }
    }
    async resolveInteraction(interaction) {
        const { guild_id } = interaction;
        let guild = this.bot.guilds.get(guild_id);
        if (!guild) {
            guild = await this.bot.rest.fetch.guild(guild_id);
            guild = this.resolveGuild(guild);
            this.cache.manage('guilds', guild_id, guild);
        }
        const channel = await this.resolveChannel(await this.bot.rest.fetch.channel(interaction.channel_id));
        let member;
        if ('member' in interaction) {
            member = await this.resolveMember(interaction.member, guild.id);
        }
        let author;
        if ('user' in interaction) {
            author = await this.resolveUser(interaction.user);
        }
        let message;
        if ('message' in interaction) {
            message = await this.resolveMessage(interaction.message);
        }
        return new Interaction_1.default(this.bot, interaction.token, interaction.version, interaction.id, interaction.application_id, interaction.type, guild, channel, interaction.data, member, author, message);
    }
    async resolveMessage(message) {
        const bot = this.bot;
        const { channel_id, guild_id, author, embeds } = message;
        let channel = bot.channels.get(channel_id);
        let guild = bot.guilds.get(guild_id);
        let user = bot.users.get(author?.id);
        let member = guild?.members?.get(author?.id);
        if (!channel) {
            channel = await bot.rest.fetch.channel(channel_id);
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
            guild = await bot.rest.fetch.guild(guild_id);
            guild = this.resolveGuild(guild);
        }
        this.cache.manage('guilds', guild.id, guild);
        if (!user) {
            user = await bot.rest.fetch.user(author?.id);
            user = this.resolveUser(user);
        }
        this.cache.manage('users', user.id, user);
        if (!member) {
            member = await bot.rest.fetch.member(guild_id, author?.id);
            member = this.resolveMember(member, guild_id);
            guild?.members?.set(member.user.id, member);
        }
        const resolvableMessage = this.resolveMessageInstance(message, bot, channel, guild, user, member);
        resolvableMessage.embeds = embeds;
        return resolvableMessage;
    }
    resolveMessageInstance(message, bot, channel, guild, user, member) {
        const { id, content, timestamp, edited_timestamp, tts, mention_everyone, nonce, pinned, type } = message;
        return new Message_1.default(bot, id, channel, guild, user, member, content, timestamp, edited_timestamp, tts, mention_everyone, nonce, pinned, type);
    }
}
function getChannelType(type) {
    switch (type) {
        case 0:
            return Types_1.ChannelType.TEXT;
        case 1:
            return Types_1.ChannelType.DM;
        case 2:
            return Types_1.ChannelType.VOICE;
        case 3:
            return Types_1.ChannelType.DM;
        case 4:
            return Types_1.ChannelType.CATEGORY;
        case 5:
            return Types_1.ChannelType.NEWS;
        case 6:
            return Types_1.ChannelType.STORE;
        default:
            return Types_1.ChannelType.UNKNOWN;
    }
}
exports.getChannelType = getChannelType;
function getChannelTypeDef(type) {
    switch (type) {
        case 0:
            return Types_1.ChannelTypeDef.TEXT;
        case 1:
            return Types_1.ChannelTypeDef.DM;
        case 2:
            return Types_1.ChannelTypeDef.VOICE;
        case 3:
            return Types_1.ChannelTypeDef.DM;
        case 4:
            return Types_1.ChannelTypeDef.CATEGORY;
        case 5:
            return Types_1.ChannelTypeDef.NEWS;
        case 6:
            return Types_1.ChannelTypeDef.STORE;
        default:
            return Types_1.ChannelTypeDef.UNKNOWN;
    }
}
exports.getChannelTypeDef = getChannelTypeDef;
function getInteractionType(type) {
    switch (type) {
        case Types_1.InteractionCallTypeDef.PONG:
            return 1;
        case Types_1.InteractionCallTypeDef.CHANNEL_MESSAGE_WITH_SOURCE:
            return 4;
        case Types_1.InteractionCallTypeDef.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE:
            return 5;
        case Types_1.InteractionCallTypeDef.DEFERRED_UPDATE_MESSAGE:
            return 6;
        case Types_1.InteractionCallTypeDef.UPDATE_MESSAGE:
            return 7;
    }
}
exports.getInteractionType = getInteractionType;
function resolveParseEmoji(emoji) {
    if (typeof emoji === 'string') {
        return (/^\d{17,19}$/).test(emoji) ? { name: null, id: emoji } : ParseEmoji_1.default(emoji);
    }
    const { name, id, animated } = emoji;
    if (!name && !id)
        return null;
    return {
        name,
        id,
        animated
    };
}
exports.resolveParseEmoji = resolveParseEmoji;
function resolveEvents(event) {
    const ev = event;
    return Events_1.Events[ev];
}
exports.resolveEvents = resolveEvents;
exports.default = Resolve;
