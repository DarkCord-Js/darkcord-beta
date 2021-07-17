declare class Collection<K, V> extends Map<K, V> {
    private baseObject?;
    private limit?;
    constructor(baseObject?: any, limit?: number | undefined);
    map(func: Function): any[];
    filter(func: Function): any[];
    find(func: Function): any[];
    random(): any[];
    add(obj: Record<any, any> | any, extra?: any, replace?: any): any;
    update(obj: Record<any, any> | any, extra?: any, replace?: any): any;
    every(func: Function): boolean;
    some(func: Function): boolean;
    remove(obj: Record<any, any>): V | null;
    toJSON(): Record<string, any>;
    toString(): string;
}
export default Collection;
//# sourceMappingURL=Collection.d.ts.map