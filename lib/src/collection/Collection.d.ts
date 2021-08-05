declare class Collection<K, V> extends Map<K, V> {
    constructor();
    map(func: (value: V) => any): V[];
    filter(func: (value: V) => any): V[];
    find(func: (value: V) => any): V[];
    random(): V[];
    every(func: Function): boolean;
    some(func: Function): boolean;
    remove(obj: Record<any, any>): V | null;
    toJSON(): Record<string, any>;
    toString(): string;
}
export default Collection;
//# sourceMappingURL=Collection.d.ts.map