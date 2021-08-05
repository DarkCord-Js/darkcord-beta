"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const events_1 = tslib_1.__importDefault(require("events"));
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const Constants_1 = require("./constants/Constants");
const PayLoads_1 = require("./constants/PayLoads");
const RequestHandler_1 = tslib_1.__importDefault(require("./handler/RequestHandler"));
const RestAPI_1 = tslib_1.__importDefault(require("./rest/RestAPI"));
const Embed_1 = tslib_1.__importDefault(require("./structures/Embed"));
/* Danger */
class Webhook extends events_1.default {
    url;
    id;
    token;
    guildId;
    channelId;
    avatar;
    name;
    applicationId;
    rest;
    constructor(url) {
        super();
        this.url = url;
        const urlMatch = url.match(/^https?:\/\/(?:canary|ptb)?\.?discord\.com\/api\/webhooks(?:\/v[0-9]\d*)?\/([^\\/]+)\/([^\\/]+)/i);
        if (urlMatch.length <= 1)
            throw new Error('Invalid webhook url.');
        this.rest = new RestAPI_1.default(this);
        this.id = urlMatch[1];
        this.token = urlMatch[2];
        (async () => {
            const res = await (await node_fetch_1.default(`${Constants_1.Constants.API}/webhooks/${this.id}/${this.token}`)).json();
            const setProperty = (key, value) => {
                Object.defineProperty(this, key, { value, writable: false });
            };
            for (let [key, value] of Object.entries(res)) {
                const split = key.split('_');
                key = split[1] ? `${split[0]}${split[1].toUpperCase().replace('D', 'd')}` : split[0];
                setProperty(key, value);
            }
        }).call(this);
    }
    async requestHandler(method, endpoint, data) {
        PayLoads_1.headers.Authorization = this.token;
        return await RequestHandler_1.default(this, PayLoads_1.headers, method, endpoint, data);
    }
    async execute(content) {
        const sendMessage = async (body) => {
            const req = await node_fetch_1.default(`${Constants_1.Constants.API}/webhooks/${this.id}/${this.token}`, {
                method: 'POST',
                body
            });
            const res = await req.json();
            console.log(res);
            return {
                id: res.id
            };
        };
        if (typeof content === 'string') {
            const body = { content };
            return await sendMessage(body);
        }
        if (content instanceof Embed_1.default) {
            const body = {
                embeds: [content]
            };
            return await sendMessage(body);
        }
        content = content;
        const contentResolvable = content;
        if (content.messageReference) {
            contentResolvable.message_reference = {
                guild_id: content.messageReference.guildId,
                channel_id: content.messageReference.channelId,
                message_id: content.messageReference.messageId
            };
        }
        if (content.allowedMentions) {
            contentResolvable.allowed_mentions = {
                roles: content.allowedMentions.roles,
                users: content.allowedMentions.users,
                replied_user: content.allowedMentions.repliedUser
            };
        }
        return await sendMessage(contentResolvable);
    }
}
exports.default = Webhook;
