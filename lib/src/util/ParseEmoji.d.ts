import Emoji from '../structures/Emoji';
declare function parseEmoji(emoji: string | Emoji): {
    name: null;
    id: string;
    animated: boolean;
} | {
    name: string;
    id: string;
    animated: boolean;
} | null | undefined;
export default parseEmoji;
//# sourceMappingURL=ParseEmoji.d.ts.map