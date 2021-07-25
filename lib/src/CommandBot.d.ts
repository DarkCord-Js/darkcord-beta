import Bot from './Bot';
import Command from './structures/command/Command';
import { CommandBotOptions, CommandOptions } from './types/Interfaces';
import CommandContext from './structures/command/CommandContext';
import Collection from './collection/Collection';
interface CommandConfig extends CommandOptions {
    exec: (ctx: CommandContext, args?: string[]) => void;
}
declare class CommandBot extends Bot {
    commands: Collection<string, Command>;
    constructor(options: CommandBotOptions);
    /** Load commands */
    commandLoader(path?: string): Promise<{
        loaded: string[];
        path: string;
    }>;
    /** Load Events */
    eventLoader(path?: string): Promise<{
        loaded: string[];
        path: string;
    }>;
    registerCommand(config: CommandConfig): void;
}
export default CommandBot;
//# sourceMappingURL=CommandBot.d.ts.map