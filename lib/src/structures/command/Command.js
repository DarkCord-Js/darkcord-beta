"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CommandContext_1 = tslib_1.__importDefault(require("./CommandContext"));
class Command {
    options;
    static createContext;
    constructor(CommandOptions) {
        /** Command Options */
        this.options = {
            name: CommandOptions.name,
            description: CommandOptions?.description,
            category: CommandOptions?.category,
            guildOnly: CommandOptions?.guildOnly ?? true,
            dmOnly: CommandOptions?.dmOnly ?? false,
            ignoreBots: CommandOptions?.ignoreBots ?? true,
            ignoreUsers: CommandOptions?.ignoreUsers ?? [],
            ignoreGuilds: CommandOptions?.ignoreGuilds ?? [],
            ownerOnly: CommandOptions?.ownerOnly ?? false,
            examples: CommandOptions?.examples
        };
    }
    execute(ctx, args) {
        ctx.client?.emit('command', this.options);
    }
}
Command.createContext = (obj) => {
    return new CommandContext_1.default(obj.message, obj.client);
};
exports.default = Command;
