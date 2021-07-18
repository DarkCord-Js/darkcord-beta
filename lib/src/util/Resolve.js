"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelType = getChannelType;
exports.getChannelTypeDef = getChannelTypeDef;
exports.resolveEvents = resolveEvents;
exports.default = void 0;

var _User = _interopRequireDefault(require("../structures/User"));

var _Member = _interopRequireDefault(require("../structures/Member"));

var _Role = _interopRequireDefault(require("../structures/Role"));

var _Guild = _interopRequireDefault(require("../structures/Guild"));

var _Types = require("../types/Types");

var _Message = _interopRequireDefault(require("../structures/Message"));

var _TextChannel = _interopRequireDefault(require("../structures/channels/TextChannel"));

var _Events = require("../constants/Events");

var _CacheManager = _interopRequireDefault(require("../structures/cache/CacheManager"));

var _Emoji = _interopRequireDefault(require("../structures/Emoji"));

var _Reaction = _interopRequireDefault(require("../structures/Reaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Resolve {
  constructor(client) {
    this.client = client;
    this.client = client;
    this.cache = new _CacheManager.default(this.client);
    return this;
  }

  resolveUser(user) {
    return new _User.default(user === null || user === void 0 ? void 0 : user.id, user === null || user === void 0 ? void 0 : user.username, user === null || user === void 0 ? void 0 : user.discriminator, user === null || user === void 0 ? void 0 : user.avatar, user === null || user === void 0 ? void 0 : user.bot, user === null || user === void 0 ? void 0 : user.system, user === null || user === void 0 ? void 0 : user.mfa_enabled, user === null || user === void 0 ? void 0 : user.locale, user === null || user === void 0 ? void 0 : user.verified, user === null || user === void 0 ? void 0 : user.flags, user === null || user === void 0 ? void 0 : user.premium_type, user === null || user === void 0 ? void 0 : user.public_flags);
  }

  resolveEmoji(emoji) {
    const {
      id,
      name,
      roles,
      user,
      require_colons,
      managed,
      animated,
      avaible
    } = emoji;
    return new _Emoji.default(id, name, roles, user, require_colons, managed, animated, avaible);
  }

  resolveMember(member, guildId) {
    const user = this.resolveUser(member.user);
    const {
      nick,
      joined_at,
      premium_since,
      avatar,
      muted,
      deaf
    } = member;
    return new _Member.default(user.id, this.client, user, nick, joined_at, premium_since, deaf, muted, avatar, guildId);
  }

  resolveRole(role) {
    return new _Role.default(role.id, role.name, role.color, role.hoist, role.position, role.permissions, role.managed, role.mentionable);
  }

  resolveGuild(guild) {
    const {
      id,
      name,
      icon,
      description,
      splash,
      discovery_splash,
      features,
      approximate_member_count,
      approximate_presence_count,
      emojis,
      stickers,
      banner,
      owner_id,
      application_id,
      region,
      afk_channel_id,
      afk_timeout,
      system_channel_id,
      widget_enabled,
      widget_channel_id,
      verification_level,
      roles,
      embed_channel_id,
      system_channel_flags,
      max_presences,
      mfa_level,
      max_video_channel_users,
      vanity_url_code,
      embed_enabled,
      default_message_notifications,
      rules_channel_id,
      premium_subscription_count,
      max_members,
      premium_tier,
      public_updates_channel_id,
      preferred_locale,
      explicit_content_filter,
      nsfw_level,
      members
    } = guild;
    const guildResolvable = new _Guild.default(id, this.client, name, icon, description, splash, discovery_splash, features, banner, owner_id, region, application_id, afk_channel_id, afk_timeout, system_channel_id, widget_enabled, widget_channel_id, verification_level, default_message_notifications, mfa_level, explicit_content_filter, max_presences, max_members, max_video_channel_users, vanity_url_code, premium_tier, premium_subscription_count, system_channel_flags, preferred_locale, rules_channel_id, public_updates_channel_id, embed_enabled, embed_channel_id, stickers, nsfw_level, approximate_member_count, approximate_presence_count);

    if (roles) {
      for (const role of roles) {
        const rrole = this.resolveRole(role);
        guildResolvable.roles.set(rrole.id, role);
      }
    }

    if (emojis) {
      for (const emoji of emojis) {
        const remoji = this.resolveEmoji(emoji);
        guildResolvable.emojis.set(remoji.id, remoji);
      }
    }
    /*for (const member of members) {
      const rmember = this.resolveMember(member, id)
      guildResolvable.members.set(rmember.user.id, rmember)
    }*/


    return guildResolvable;
  }

  async resolveTextChannel(channel) {
    const client = this.client;
    const {
      id,
      type,
      name,
      last_message_id,
      last_pin_timestamp,
      position,
      parent_id,
      topic,
      guild_id,
      permission_overwrites,
      nsfw,
      rate_limit_per_user
    } = channel;
    let guild = client.guilds.get(guild_id);

    if (!guild) {
      guild = await client.rest.fetch.guild(guild_id);
    }

    return new _TextChannel.default(id, client, type, last_message_id, last_pin_timestamp, name, position, parent_id, topic, guild, permission_overwrites, nsfw, rate_limit_per_user);
  }

  async resolveReaction(reaction) {
    const {
      user_id,
      channel_id,
      message_id,
      guild_id
    } = reaction;
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
    return new _Reaction.default(user, channel, message, guild, emoji, member);
  }

  async resolveMessage(message) {
    var _guild, _guild$members;

    const client = this.client;
    const {
      channel_id,
      guild_id,
      author,
      embeds
    } = message;
    let channel = client.channels.get(channel_id);
    let guild = client.guilds.get(guild_id);
    let user = client.users.get(author === null || author === void 0 ? void 0 : author.id);
    let member = (_guild = guild) === null || _guild === void 0 ? void 0 : (_guild$members = _guild.members) === null || _guild$members === void 0 ? void 0 : _guild$members.get(author === null || author === void 0 ? void 0 : author.id);

    if (!channel) {
      channel = await client.rest.fetch.channel(channel_id);
    }

    const type = getChannelType(channel.type);

    if (type === _Types.ChannelType.DM) {
      return null;
    }

    const typeDef = getChannelTypeDef(channel.type);

    if (typeDef === 'text') {
      channel = await this.resolveTextChannel(channel);
    }

    this.cache.manage('channels', channel.id, channel);

    if (!guild) {
      guild = await client.rest.fetch.guild(guild_id);
      guild = this.resolveGuild(guild);
    }

    this.cache.manage('guilds', guild.id, guild);

    if (!user) {
      user = await client.rest.fetch.user(author === null || author === void 0 ? void 0 : author.id);
      user = this.resolveUser(user);
    }

    this.cache.manage('users', user.id, user);

    if (!member) {
      var _guild2, _guild2$members;

      member = await client.rest.fetch.member(guild_id, author === null || author === void 0 ? void 0 : author.id);
      member = this.resolveMember(member, guild_id);
      (_guild2 = guild) === null || _guild2 === void 0 ? void 0 : (_guild2$members = _guild2.members) === null || _guild2$members === void 0 ? void 0 : _guild2$members.set(member.user.id, member);
    }

    const resolvableMessage = this.resolveMessageInstance(message, client, channel, guild, user, member);
    resolvableMessage.embeds = embeds;
    return resolvableMessage;
  }

  resolveMessageInstance(message, client, channel, guild, user, member) {
    const {
      id,
      content,
      timestamp,
      edited_timestamp,
      tts,
      mention_everyone,
      nonce,
      pinned,
      type
    } = message;
    return new _Message.default(client, id, channel, guild, user, member, content, timestamp, edited_timestamp, tts, mention_everyone, nonce, pinned, type);
  }

}

function getChannelType(type) {
  if (type === 0) return _Types.ChannelType.TEXT;
  if (type === 1) return _Types.ChannelType.DM;
  if (type === 2) return _Types.ChannelType.VOICE;
  if (type === 3) return _Types.ChannelType.DM;
  if (type === 4) return _Types.ChannelType.CATEGORY;
  if (type === 5) return _Types.ChannelType.NEWS;
  if (type === 6) return _Types.ChannelType.STORE;
  return _Types.ChannelType.UNKNOWN;
}

function getChannelTypeDef(type) {
  if (type === 0) return _Types.ChannelTypeDef.TEXT;
  if (type === 1) return _Types.ChannelTypeDef.DM;
  if (type === 2) return _Types.ChannelTypeDef.VOICE;
  if (type === 3) return _Types.ChannelTypeDef.DM;
  if (type === 4) return _Types.ChannelTypeDef.CATEGORY;
  if (type === 5) return _Types.ChannelTypeDef.NEWS;
  if (type === 6) return _Types.ChannelTypeDef.STORE;
  return _Types.ChannelTypeDef.UNKNOWN;
}

function resolveEvents(event) {
  const ev = event;
  return _Events.Events[ev];
}

var _default = Resolve;
exports.default = _default;