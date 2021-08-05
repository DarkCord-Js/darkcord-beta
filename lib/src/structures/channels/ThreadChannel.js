"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Collection_1 = tslib_1.__importDefault(require("../../collection/Collection"));
const Constants_1 = require("../../constants/Constants");
const Resolve_1 = tslib_1.__importDefault(require("../../util/Resolve"));
const CacheManager_1 = tslib_1.__importDefault(require("../../managers/CacheManager"));
const GuildChannel_1 = tslib_1.__importDefault(require("./GuildChannel"));
class ThreadChannel extends GuildChannel_1.default {
    _threadMetadata;
    members;
    constructor(_id, _bot, _type, _name, _lastMessageId, _lastPinTimestamp, _position, _parentId, _topic, _guild, _permissionOverwrites, _nsfw, _rateLimitPerUser, _threadMetadata) {
        super(_id, _bot, _type, _name, _lastMessageId, _lastPinTimestamp, _position, _parentId, _topic, _guild, _permissionOverwrites, _nsfw, _rateLimitPerUser);
        this._threadMetadata = _threadMetadata;
        this.members = new Collection_1.default();
    }
    get metadata() {
        return {
            archived: this._threadMetadata.archived,
            autoArchiveDuration: this._threadMetadata.auto_archive_duration,
            archiveTimestamp: this._threadMetadata.archive_timestamp,
            locked: this._threadMetadata.locked
        };
    }
    get archivedAt() {
        return new Date(this.metadata.archiveTimestamp);
    }
    get threadMembers() {
        return this.members;
    }
    async join() {
        await this.bot.requestHandler('PUT', `${Constants_1.EndPoints.channels}/${this.id}/${Constants_1.EndPoints.thread_members}/@me`);
        return this;
    }
    async leave() {
        await this.bot.requestHandler('DELETE', `${Constants_1.EndPoints.channels}/${this.id}/${Constants_1.EndPoints.thread_members}/@me`);
        return this;
    }
    async edit(options) {
        let newThreadChannel = await this.bot.requestHandler('PATCH', `${Constants_1.EndPoints.channels}/${this.id}`, {
            name: options.name ?? this.name,
            archived: options.archived,
            auto_archive_duration: options.autoArchiveDuration,
            rate_limit_per_user: options.rateLimitPerUser ?? this.rateLimitPerUser,
            locked: options.locked
        });
        const resolve = new Resolve_1.default(this.bot);
        newThreadChannel = resolve.resolveThreadChannel(newThreadChannel);
        new CacheManager_1.default(this.bot).manage('channels', this.id, newThreadChannel);
    }
}
exports.default = ThreadChannel;
