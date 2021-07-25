import { Partial_Emoji, SelectMenuOptions } from '../types/Interfaces';
import Emoji from './Emoji';
declare class SelectMenu {
    type?: number;
    custom_id?: string;
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    options: SelectMenuOptions[];
    contructor(): this;
    setCustomId(customId: string): this;
    setPlaceholder(placeholder: string): this;
    setMinValues(minValues: number): this;
    setMaxValues(maxValues: number): this;
    addOption(label: string, value: string, description?: string, emoji?: string | Emoji | Partial_Emoji, _default?: boolean): this;
    addOptions(...options: SelectMenuOptions[]): this;
    private get createMenu();
    toString(): string;
}
export default SelectMenu;
//# sourceMappingURL=SelectMenu.d.ts.map