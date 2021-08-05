"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection extends Map {
    constructor() {
        super();
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
        let name = null;
        this.forEach((a) => {
            if (!name)
                name = a.name;
        });
        return `[Collection<${name}>]`;
    }
}
exports.default = Collection;
