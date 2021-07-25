import GuildChannel from './GuildChannel';
import TextChannel from './TextChannel';
declare class NewsChannel extends TextChannel {
    addFollower(channel: GuildChannel | TextChannel, reason?: string): Promise<any>;
}
export default NewsChannel;
//# sourceMappingURL=NewsChannel.d.ts.map