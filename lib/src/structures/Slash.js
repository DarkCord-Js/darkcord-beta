"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Slash {
    _id;
    _application_id;
    _name;
    _description;
    _guild;
    _options;
    _default;
    constructor(_id, _application_id, _name, _description, _guild, _options, _default = false) {
        this._id = _id;
        this._application_id = _application_id;
        this._name = _name;
        this._description = _description;
        this._guild = _guild;
        this._options = _options;
        this._default = _default;
    }
}
exports.default = Slash;
