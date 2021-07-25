import Bot from '../../Bot';
import { CommandOptions } from '../../types/Interfaces';
import Message from '../Message';
import CommandContext from './CommandContext';
declare class Command {
    options: CommandOptions;
    static createContext: (obj: {
        message: Message;
        client?: Bot | undefined;
    }) => CommandContext;
    constructor(CommandOptions: CommandOptions);
    execute(ctx: CommandContext, args?: string[]): void;
}
export default Command;
//# sourceMappingURL=Command.d.ts.map