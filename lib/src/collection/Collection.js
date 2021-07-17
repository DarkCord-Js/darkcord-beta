"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection extends Map {
    constructor(baseObject, limit) {
        super();
        this.baseObject = baseObject;
        this.limit = limit;
    }
    map(func) {
        const CollectionMap = [];
        for (const value of this.values()) {
            CollectionMap.push(func(value));
        }
        return CollectionMap;
    }
    filter(func) {
        const CollectionFilter = [];
        for (const value of this.values()) {
            if (func(value)) {
                CollectionFilter.push(value);
            }
        }
        return CollectionFilter;
    }
    find(func) {
        const CollectionFind = [];
        for (const value of this.values()) {
            CollectionFind.push(func(value));
        }
        return CollectionFind;
    }
    random() {
        const index = Math.round(Math.random() * this.size);
        const values = this.values();
        for (let i = 0; i < index; ++i) {
            values.next();
        }
        return values.next().value;
    }
    add(obj, extra, replace) {
        const existing = this.get(obj.id);
        // Ifs
        if (this.limit === 0) {
            return (obj instanceof this.baseObject || obj?.constructor.name === this.baseObject.name)
                ? obj
                : new this.baseObject(extra, replace);
        }
        if (obj.id == null)
            throw new Error('Missing object id');
        if (existing && !replace)
            return existing;
        if (this.limit && this.size > this.limit) {
            const keys = this.keys();
            while (this.size > this.limit) {
                this.delete(keys.next().value);
            }
        }
        return obj;
    }
    update(obj, extra, replace) {
        const item = this.get(obj.id);
        if (!obj.id && obj.id !== 0)
            throw new Error('Missing object id');
        if (!item)
            return this.add(obj, extra, replace);
        // @ts-ignore
        item.update(obj, extra);
        return item;
    }
    every(func) {
        for (const value of this.values()) {
            if (func(value)) {
                return false;
            }
        }
        return true;
    }
    some(func) {
        for (const value of this.values()) {
            if (func(value)) {
                return true;
            }
        }
        return false;
    }
    remove(obj) {
        const objItem = this.get(obj.id);
        if (!objItem) {
            return null;
        }
        this.delete(obj);
        return objItem;
    }
    toJSON() {
        const json = {};
        for (const value of this.values()) {
            // @ts-ignore
            json[value.id] = value;
        }
        return json;
    }
    toString() {
        return `[Collection<${this.baseObject?.name}>]`;
    }
}
exports.default = Collection;
