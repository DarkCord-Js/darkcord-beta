"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Bot_1 = tslib_1.__importDefault(require("./Bot"));
const Command_1 = tslib_1.__importDefault(require("./structures/command/Command"));
const Loader_1 = require("./structures/Loader");
const Collection_1 = tslib_1.__importDefault(require("./collection/Collection"));
class CommandBot extends Bot_1.default {
    commands;
    constructor(options) {
        super(options);
        this.commands = new Collection_1.default();
        this.options.prefix = options.prefix;
        this.on('message', (message) => {
            if (message.content.startsWith(`${this.options.prefix}`)) {
                const args = message.content.slice(this.options.prefix?.length).trim().split(/ +/);
                const commandName = args.shift();
                const ctx = Command_1.default.createContext({
                    message,
                    bot: this
                });
                this.commands.get(`${commandName}`)?.execute(ctx, args);
            }
        });
    }
    /** Load commands */
    async commandLoader(path) {
        return await Loader_1.CommandLoader(this, path);
    }
    /** Load Events */
    async eventLoader(path) {
        return await Loader_1.EventLoader(this, path);
    }
    registerCommand(config) {
        class CommandClass extends Command_1.default {
            constructor() {
                super(config);
            }
            execute(ctx, args) {
                return config.exec(ctx, args);
            }
        }
        const command = new CommandClass();
        this.commands.set(command.options.name, command);
    }
}
exports.default = CommandBot;
