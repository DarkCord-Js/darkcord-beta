"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Collection_1 = tslib_1.__importDefault(require("../collection/Collection"));
const Resolve_1 = tslib_1.__importDefault(require("../util/Resolve"));
class Guild {
    constructor(_id, _client, _name, _icon, _description, _splash, _discoverySplash, _features, _banner, _ownerId, _applicationId, _region, _afkChannelId, _afkTimeout, _systemChannelId, _widgetEnabled, _widgetChannelId, _verificationLevel, _defaultMessageNotifications, _mfaLevel, _explicitContentFilter, _maxPresences, _maxMembers, _maxVideoChannelUsers, _vanityUrl, _premiumTier, _premiumSubscriptionCount, _systemChannelFlags, _preferredLocale, _rulesChannelId, _publicUpdatesChannelId, _embedEnabled, _embedChannelId, _stickers, _nsfw_level, _memberCount, _presenceCount) {
        this._id = _id;
        this._client = _client;
        this._name = _name;
        this._icon = _icon;
        this._description = _description;
        this._splash = _splash;
        this._discoverySplash = _discoverySplash;
        this._features = _features;
        this._banner = _banner;
        this._ownerId = _ownerId;
        this._applicationId = _applicationId;
        this._region = _region;
        this._afkChannelId = _afkChannelId;
        this._afkTimeout = _afkTimeout;
        this._systemChannelId = _systemChannelId;
        this._widgetEnabled = _widgetEnabled;
        this._widgetChannelId = _widgetChannelId;
        this._verificationLevel = _verificationLevel;
        this._defaultMessageNotifications = _defaultMessageNotifications;
        this._mfaLevel = _mfaLevel;
        this._explicitContentFilter = _explicitContentFilter;
        this._maxPresences = _maxPresences;
        this._maxMembers = _maxMembers;
        this._maxVideoChannelUsers = _maxVideoChannelUsers;
        this._vanityUrl = _vanityUrl;
        this._premiumTier = _premiumTier;
        this._premiumSubscriptionCount = _premiumSubscriptionCount;
        this._systemChannelFlags = _systemChannelFlags;
        this._preferredLocale = _preferredLocale;
        this._rulesChannelId = _rulesChannelId;
        this._publicUpdatesChannelId = _publicUpdatesChannelId;
        this._embedEnabled = _embedEnabled;
        this._embedChannelId = _embedChannelId;
        this._stickers = _stickers;
        this._nsfw_level = _nsfw_level;
        this._memberCount = _memberCount;
        this._presenceCount = _presenceCount;
        this._roles = new Collection_1.default();
        this._members = new Collection_1.default();
        this._emojis = new Collection_1.default();
        this._channels = new Collection_1.default();
    }
    get roles() {
        return this._roles;
    }
    set roles(roles) {
        this._roles = roles;
    }
    get emojis() {
        return this._emojis;
    }
    set emojis(emojis) {
        this._emojis = emojis;
    }
    get channels() {
        return this._channels;
    }
    set channels(channels) {
        this._channels = channels;
    }
    get name() {
        return this._name;
    }
    get defaultMessageNotifications() {
        return this._defaultMessageNotifications;
    }
    get members() {
        return this._members;
    }
    get systemChannelFlags() {
        return this._systemChannelFlags;
    }
    get region() {
        return this._region;
    }
    set members(members) {
        this._members = members;
    }
    get id() {
        return this._id;
    }
    get icon() {
        return this._icon;
    }
    get verificationLevel() {
        return this._verificationLevel;
    }
    get vanityUrl() {
        return this._vanityUrl;
    }
    get description() {
        return this._description;
    }
    get splash() {
        return this._splash;
    }
    get maxMambers() {
        return this._maxMembers;
    }
    get nsfwLevel() {
        return this._nsfw_level;
    }
    get afkTimeout() {
        return this._afkTimeout;
    }
    get maxPresences() {
        return this._maxPresences;
    }
    get presenceCount() {
        return this._presenceCount;
    }
    get banner() {
        return this._banner;
    }
    get discoverySplash() {
        return this._discoverySplash;
    }
    get explicitContentFilter() {
        return this._explicitContentFilter;
    }
    get mfaLevel() {
        return this._mfaLevel;
    }
    get stickers() {
        return this._stickers;
    }
    get boosterSubscriptionCount() {
        return this._premiumSubscriptionCount;
    }
    get boosterTier() {
        return this._premiumTier;
    }
    get applicationId() {
        return this._applicationId;
    }
    get memberCount() {
        return this._memberCount;
    }
    get client() {
        return this._client;
    }
    get rulesChannelId() {
        return this._rulesChannelId;
    }
    get features() {
        return this._features;
    }
    get ownerId() {
        return this._ownerId;
    }
    get owner() {
        let owner = this.members.get(this.ownerId);
        if (!owner) {
            const resolve = new Resolve_1.default(this.client);
            async () => {
                const ownerMember = await this.client.rest.fetch.member(this.id, this.ownerId);
                owner = resolve.resolveMember(ownerMember, this.id);
                this.members.set(this.ownerId, owner);
            };
        }
        return owner;
    }
    async rulesChannel() {
        let rulesChannel = await this._client.rest.fetch.channel(this._rulesChannelId);
        const resolve = new Resolve_1.default(this._client);
        rulesChannel = await resolve.resolveTextChannel(rulesChannel.id);
        return rulesChannel;
    }
}
exports.default = Guild;
