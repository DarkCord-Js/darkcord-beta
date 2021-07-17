"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Embed {
    constructor(options) {
        this.options = options;
        this.fields = [];
        this.title = '';
        this.type = '';
        this.thumbnail = null;
        this.image = null;
        this.video = null;
        this.author = null;
        this.provider = null;
        this.footer = null;
        this.description = '';
        this.url = '';
        this.timestamp = 0;
        return this.buildEmbed;
    }
    addField(name, value, inline = false) {
        return this.addFields({ name, value, inline });
    }
    addFields(...fields) {
        this.fields.push(...fields);
        return this;
    }
    setAuthor(name, iconURL, url) {
        this.author = { name, iconURL, url };
        return this;
    }
    setFooter(text, iconURL) {
        this.footer = { text, iconURL };
        return this;
    }
    setImage(url) {
        this.image = { url };
        return this;
    }
    setDescription(content) {
        this.description = content;
        return this;
    }
    setTitle(content) {
        this.title = content;
        return this;
    }
    setThumbnail(url) {
        this.thumbnail = { url };
        return this;
    }
    setTimestamp(timestamp = Date.now()) {
        if (timestamp instanceof Date)
            timestamp = timestamp.getTime();
        this.timestamp = timestamp;
        return this;
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    get buildEmbed() {
        this.type = this.options?.type ?? 'rich';
        this.title = this.options?.title ?? '';
        this.description = this.options?.description ?? '';
        this.url = this.options?.url ?? '';
        this.timestamp = this.options?.timestamp ?? '';
        this.fields = this.options?.fields ?? [];
        this.thumbnail = this.options?.thumbnail ?? null;
        this.image = this.options?.image ?? null;
        this.video = this.options?.video ?? null;
        this.author = this.options?.author ?? null;
        this.provider = this.options?.provider ?? null;
        this.footer = this.options?.footer ?? null;
        return this;
    }
}
exports.default = Embed;
