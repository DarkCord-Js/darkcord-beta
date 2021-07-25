import type { ButtonOptions, Partial_Emoji } from '../types/Interfaces';
import Emoji from './Emoji';
declare type style = 'Primary' | 'Secondary' | 'Success' | 'Danger' | 'Link';
declare type styleNumber = 1 | 2 | 3 | 4 | 5;
declare class Button {
    private options?;
    type: number;
    style: number;
    label?: string;
    emoji?: string | Partial_Emoji;
    url?: string;
    custom_id?: string;
    disabled: boolean;
    constructor(options?: ButtonOptions | undefined);
    setLabel(label: string): this;
    setEmoji(emoji: string | Emoji | Partial_Emoji): this;
    setCustomId(customId: string): this;
    setURL(url: string): this;
    setDisabled(disabled: boolean): this;
    setStyle(style: style | styleNumber): this;
    resolveStyle(style: style): number;
    private get buildButton();
    toString(): string;
}
export default Button;
//# sourceMappingURL=Button.d.ts.map