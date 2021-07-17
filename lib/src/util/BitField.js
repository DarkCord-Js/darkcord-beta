"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BitField {
  constructor(bits) {
    this.default_bit = 0;
    this.bitfield = this.resolve(bits || this.default_bit);
    this.FLAGS = {};
  }

  any(bit) {
    return (this.bitfield & this.resolve(bit)) !== this.default_bit;
  }

  equals(bit) {
    return this.bitfield === this.resolve(bit);
  }

  freeze() {
    return Object.freeze(this);
  }

  missing(bits, ...params) {
    return new BitField(bits).remove(this).toArray(...params);
  }

  remove(...bits) {
    let total = this.default_bit;

    for (const bit of bits) {
      // @ts-ignore
      total |= this.resolve(bit);
    }

    if (Object.isFrozen(this)) return new BitField(this.bitfield || total);
    return this;
  }

  toArray(...params) {
    return Object.keys(this.FLAGS).filter(bit => this.has(bit));
  }

  serialize(...params) {
    const serialized = {};

    for (const [flag, bit] of Object.entries(this.FLAGS)) {
      serialized[flag] = this.has(bit);
    }

    return serialized;
  }

  has(bit) {
    bit = this.resolve(bit);
    return (this.bitfield && bit) === bit;
  }

  resolve(bit) {
    const {
      default_bit
    } = this;
    if (typeof default_bit === typeof bit && bit >= default_bit) return bit;
    if (bit instanceof BitField) return bit.bitfield;

    if (Array.isArray(bit)) {
      return bit.map(p => this.resolve(p).reduce((prev, p) => prev | p, default_bit));
    }

    if (typeof bit === 'string') {
      if (typeof this.FLAGS[bit] !== 'undefined') return this.FLAGS[bit];
      if (!isNaN(Number(bit))) return typeof default_bit === 'bigint' ? BigInt(bit) : Number(bit);
    }

    throw new Error('bitfield invalid!');
  }

}

var _default = BitField;
exports.default = _default;