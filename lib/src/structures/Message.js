"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Embed_1 = tslib_1.__importDefault(require("./Embed"));
class Message {
    constructor(_client, _id, _channel, _guild, _author, _member, _content, _timestamp, _editedAt, _tts, _mentionedEveryone, _nonce, _pinned, _type) {
        this._client = _client;
        this._id = _id;
        this._channel = _channel;
        this._guild = _guild;
        this._author = _author;
        this._member = _member;
        this._content = _content;
        this._timestamp = _timestamp;
        this._editedAt = _editedAt;
        this._tts = _tts;
        this._mentionedEveryone = _mentionedEveryone;
        this._nonce = _nonce;
        this._pinned = _pinned;
        this._type = _type;
        this._embeds = [];
        return this;
    }
    get client() {
        return this._client;
    }
    get id() {
        return this._id;
    }
    get guild() {
        return this._guild;
    }
    get author() {
        return this._author;
    }
    get channel() {
        return this._channel;
    }
    set embeds(embeds) {
        this._embeds = embeds;
    }
    get content() {
        return this._content;
    }
    get member() {
        return this._member;
    }
    get timestamp() {
        return this._timestamp;
    }
    get type() {
        return this._type;
    }
    get tts() {
        return this._tts;
    }
    get pinned() {
        return this._pinned;
    }
    get nonce() {
        return this._nonce;
    }
    get mentionedEveryone() {
        return this._mentionedEveryone;
    }
    get editedAt() {
        return this._editedAt ? this._editedAt : null;
    }
    async edit(newContent) {
        if (typeof newContent === 'string') {
            return this.client.rest.editMessage({ content: newContent }, this.channel.id, this.id);
        }
        else if (newContent instanceof Embed_1.default) {
            return this.client.rest.editMessage({ embeds: [newContent] }, this.channel.id, this.id);
        }
        else {
            return this.client.rest.editMessage({
                content: newContent.content,
                embeds: newContent.embeds,
                tts: newContent.tts || false
            }, this.channel.id, this.id);
        }
    }
}
exports.default = Message;
