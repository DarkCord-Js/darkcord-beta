"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Constants_1 = require("../constants/Constants");
const Types_1 = require("../types/Types");
const Resolve_1 = require("../util/Resolve");
const Embed_1 = tslib_1.__importDefault(require("./Embed"));
class Interaction {
    client;
    token;
    version;
    _id;
    _application_id;
    _type;
    _guild;
    _channel;
    _data;
    _member;
    _user;
    _message;
    constructor(client, token, version, _id, _application_id, _type, _guild, _channel, _data, _member, _user, _message) {
        this.client = client;
        this.token = token;
        this.version = version;
        this._id = _id;
        this._application_id = _application_id;
        this._type = _type;
        this._guild = _guild;
        this._channel = _channel;
        this._data = _data;
        this._member = _member;
        this._user = _user;
        this._message = _message;
    }
    get guild() {
        return this._guild;
    }
    get id() {
        return this._id;
    }
    get message() {
        return this._message;
    }
    get member() {
        return this._member;
    }
    get author() {
        return this._user;
    }
    get type() {
        return this._type;
    }
    get data() {
        const dat = {
            id: this._data.id,
            name: this._data.name,
            resolved: this._data.resolved,
            options: this._data.options,
            customId: this._data.custom_id,
            componentType: this._data.component_type,
            values: this._data.values
        };
        return dat;
    }
    get channel() {
        return this._channel;
    }
    get applicationId() {
        return this._application_id;
    }
    get componentType() {
        return this.data.componentType;
    }
    isCommand() {
        return this.type === Types_1.InteractionType.APPLICATION_COMMAND;
    }
    isComponent() {
        return this.type === Types_1.InteractionType.MESSAGE_COMPONENT;
    }
    isButton() {
        return this.componentType === 2;
    }
    isSelectMenu() {
        return this.componentType === 3;
    }
    reply(data, type = 4) {
        if (!data)
            throw new Error('Reply require data.');
        if (typeof type === 'string') {
            Resolve_1.getInteractionType(type);
        }
        if (typeof data === 'string') {
            data = {
                content: data
            };
        }
        if (data instanceof Embed_1.default) {
            data = {
                embeds: [data]
            };
        }
        this.client.requestHandler('POST', `${Constants_1.EndPoints.interactions}/${this.id}/${this.token}/${Constants_1.EndPoints.callback}`, {
            type,
            data
        });
    }
}
exports.default = Interaction;
