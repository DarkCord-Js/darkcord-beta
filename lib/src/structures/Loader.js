"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLoader = exports.CommandLoader = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const isClass_1 = tslib_1.__importDefault(require("../util/isClass"));
const isConstructor_1 = tslib_1.__importDefault(require("../util/isConstructor"));
const commandsLoaded = [];
const eventsLoaded = [];
async function CommandLoader(bot, _path = './darkcord/commands') {
    const dir = path_1.default.join(path_1.default.dirname(require.main?.filename), _path);
    fs_1.default.readdir(path_1.default.resolve(dir), (err, __) => {
        if (err)
            throw err;
        for (const pof of __) {
            if (fs_1.default.lstatSync(path_1.default.join(dir, pof)).isDirectory()) {
                fs_1.default.readdir(path_1.default.join(_path, pof), (err, files) => {
                    if (err)
                        throw err;
                    files = files.filter(file => file.endsWith('.js'));
                    for (const file of files) {
                        const _dir = path_1.default.relative(dir, path_1.default.join(_path, file));
                        LoadCommando(bot, _dir, file);
                    }
                });
            }
            else {
                if (pof.endsWith('.js')) {
                    const _dir = path_1.default.relative(dir, path_1.default.join(_path, pof));
                    LoadCommando(bot, _dir, pof);
                }
            }
        }
    });
    const r = {
        loaded: commandsLoaded,
        path: dir
    };
    return r;
}
exports.CommandLoader = CommandLoader;
function LoadCommando(bot, _dir, file) {
    let commando = require(_dir);
    if (commando.default) {
        commando = commando.default;
    }
    if (isClass_1.default(commando)) {
        if (isConstructor_1.default(commando)) {
            commando = new commando();
            const name = commando.options?.name ?? commando.name;
            if (name) {
                commandsLoaded.push(name);
                bot.commands.set(name, commando);
            }
            else {
                throw new Error(`Missing command name.\nFile: ${file}`);
            }
        }
        else {
            const name = commando.options?.name ?? commando.name;
            if (name) {
                commandsLoaded.push(name);
                bot.commands.set(name, commando);
            }
            else {
                throw new Error(`Missing command name.\nFile: ${file}`);
            }
        }
    }
    else {
        throw new Error(`File ${file} is not a class.`);
    }
}
function EventLoader(bot, _path = './darkcord/events') {
    const dir = path_1.default.join(path_1.default.dirname(require.main?.filename), _path);
    fs_1.default.readdir(path_1.default.resolve(dir), (err, __) => {
        if (err)
            throw err;
        for (const pof of __) {
            if (fs_1.default.lstatSync(path_1.default.join(dir, pof)).isDirectory()) {
                fs_1.default.readdir(path_1.default.join(_path, pof), (err, files) => {
                    if (err)
                        throw err;
                    files = files.filter(file => file.endsWith('.js'));
                    for (const file of files) {
                        const _dir = path_1.default.relative(dir, path_1.default.join(_path, file));
                        LoadEvent(bot, _dir, file);
                    }
                });
            }
            else {
                if (pof.endsWith('.js')) {
                    const _dir = path_1.default.relative(dir, path_1.default.join(_path, pof));
                    LoadEvent(bot, _dir, pof);
                }
            }
        }
    });
    const r = {
        loaded: eventsLoaded,
        path: dir
    };
    return r;
}
exports.EventLoader = EventLoader;
function LoadEvent(bot, _dir, file) {
    let event = require(_dir);
    if (event.default) {
        event = event.default;
    }
    if (isClass_1.default(event)) {
        if (isConstructor_1.default(event)) {
            event = new event();
            const name = event.options?.name ?? event.name;
            if (name) {
                eventsLoaded.push(name);
                if (event.execute) {
                    bot.on(name, (...args) => event.execute(...args));
                }
                else {
                    throw new Error(`Missing event execute.\nFile: ${file}`);
                }
            }
            else {
                throw new Error(`Missing event name.\nFile: ${file}`);
            }
        }
        else {
            const name = event.options?.name ?? event.name;
            if (name) {
                commandsLoaded.push(name);
                if (event.execute) {
                    bot.on(name, (...args) => event.execute(...args));
                }
                else {
                    throw new Error(`Missing event execute.\nFile: ${file}`);
                }
            }
            else {
                throw new Error(`Missing event name.\nFile: ${file}`);
            }
        }
    }
    else {
        throw new Error(`File ${file} is not a class.`);
    }
}
