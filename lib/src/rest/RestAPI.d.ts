import type Bot from '../Bot';
import type { API_ChannelCreate, MessageOptions } from '../types/Interfaces';
import Fetch from './Fetch';
import Webhook from '../WebHook';
declare class RestAPI {
    private bot;
    private _token;
    fetch: Fetch;
    private requestHandler;
    constructor(bot: Bot | Webhook);
    createMessage(options: MessageOptions, id: string): Promise<any>;
    deleteMessage(channelId: string, messageId: string): Promise<any>;
    createChannel(guildId: string, options: API_ChannelCreate): Promise<any>;
    deleteChannel(channelId: string, reason: string): Promise<any>;
    editMessage(options: MessageOptions, channelId: string, messageId: string): Promise<any>;
    createGuildEmoji(guildId: string, options: API_ChannelCreate): Promise<any>;
    deleteGuildEmoji(guildId: string, emojiId: string, reason: string): Promise<any>;
    banMember(guildId: string, memberId: string, days: number, reason?: string): Promise<any>;
    set token(token: string);
}
export default RestAPI;
//# sourceMappingURL=RestAPI.d.ts.map