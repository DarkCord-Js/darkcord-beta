"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Embed {
  fields = [];
  title = '';
  type = '';
  thumbnail = null;
  image = null;
  video = null;
  author = null;
  provider = null;
  footer = null;
  description = '';
  url = '';
  timestamp = 0;

  constructor(options) {
    this.options = options;
    this.options = options;
    return this.buildEmbed;
  }

  addField(name, value, inline = false) {
    return this.addFields({
      name,
      value,
      inline
    });
  }

  addFields(...fields) {
    this.fields.push(...fields);
    return this;
  }

  setAuthor(name, iconURL, url) {
    this.author = {
      name,
      iconURL,
      url
    };
    return this;
  }

  setFooter(text, iconURL) {
    this.footer = {
      text,
      iconURL
    };
    return this;
  }

  setImage(url) {
    this.image = {
      url
    };
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
    this.thumbnail = {
      url
    };
    return this;
  }

  setTimestamp(timestamp = Date.now()) {
    if (timestamp instanceof Date) timestamp = timestamp.getTime();
    this.timestamp = timestamp;
    return this;
  }

  setURL(url) {
    this.url = url;
    return this;
  }

  get buildEmbed() {
    var _this$options, _this$options2, _this$options3, _this$options4, _this$options5, _this$options6, _this$options7, _this$options8, _this$options9, _this$options10, _this$options11, _this$options12;

    this.type = ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.type) ?? 'rich';
    this.title = ((_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.title) ?? '';
    this.description = ((_this$options3 = this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.description) ?? '';
    this.url = ((_this$options4 = this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.url) ?? '';
    this.timestamp = ((_this$options5 = this.options) === null || _this$options5 === void 0 ? void 0 : _this$options5.timestamp) ?? '';
    this.fields = ((_this$options6 = this.options) === null || _this$options6 === void 0 ? void 0 : _this$options6.fields) ?? [];
    this.thumbnail = ((_this$options7 = this.options) === null || _this$options7 === void 0 ? void 0 : _this$options7.thumbnail) ?? null;
    this.image = ((_this$options8 = this.options) === null || _this$options8 === void 0 ? void 0 : _this$options8.image) ?? null;
    this.video = ((_this$options9 = this.options) === null || _this$options9 === void 0 ? void 0 : _this$options9.video) ?? null;
    this.author = ((_this$options10 = this.options) === null || _this$options10 === void 0 ? void 0 : _this$options10.author) ?? null;
    this.provider = ((_this$options11 = this.options) === null || _this$options11 === void 0 ? void 0 : _this$options11.provider) ?? null;
    this.footer = ((_this$options12 = this.options) === null || _this$options12 === void 0 ? void 0 : _this$options12.footer) ?? null;
    return this;
  }

}

var _default = Embed;
exports.default = _default;