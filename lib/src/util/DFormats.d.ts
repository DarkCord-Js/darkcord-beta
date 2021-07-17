import { StyleTimestamp } from '../types/Types';
declare const DFormats: {
    /** Creates timestamp */
    createTimestamp: (time: number) => string;
    /** Creates styled timestamp */
    createStyledTimestamp: (time: number, style: StyleTimestamp) => string;
    /** Creates user mention */
    createUserMention: (userId: string) => string;
    /** Creates role mention */
    createRoleMention: (roleId: string) => string;
    /** Creates channel mention */
    createChannelMention: (channelId: string) => string;
    /** Creates emoji code */
    createEmojiCode: (emojiName: string, emojiId: string) => string;
    /** Creates animated emoji code */
    createAnimatedEmojiCode: (emojiName: string, emojiId: string) => string;
};
export default DFormats;
//# sourceMappingURL=DFormats.d.ts.map