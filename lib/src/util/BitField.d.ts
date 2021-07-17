import type { bit } from '../types/Types';
declare class BitField {
    private readonly default_bit;
    private readonly FLAGS;
    private readonly bitfield;
    constructor(bits?: bit);
    any(bit: bit): boolean;
    equals(bit: bit): boolean;
    freeze(): Readonly<BitField>;
    missing(bits: bit, ...params: any): string[];
    remove(...bits: bit | any): BitField;
    toArray(...params: any): string[];
    serialize(...params: any): object;
    has(bit: bit): boolean;
    resolve(bit: bit): bit | any;
}
export default BitField;
//# sourceMappingURL=BitField.d.ts.map