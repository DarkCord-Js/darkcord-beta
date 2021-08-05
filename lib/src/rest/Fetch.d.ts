import Bot from '../Bot';
import Webhook from '../WebHook';
declare class Fetch {
    bot: Bot | Webhook;
    constructor(bot: Bot | Webhook);
    user(id: string): Promise<any>;
    message(channelId: string, messageId: string): Promise<any>;
    member(guildId: string, memberId: string): Promise<any>;
    channel(id: string): Promise<any>;
    guild(id: string): Promise<any>;
    guilds(): Promise<any>;
    guildChannels(id: string): Promise<any>;
    guildMembers(id: string, max: number): Promise<any>;
}
export default Fetch;
//# sourceMappingURL=Fetch.d.ts.map