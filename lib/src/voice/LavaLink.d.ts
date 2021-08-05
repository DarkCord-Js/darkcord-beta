import { Manager } from 'erela.js';
import type Bot from '../Bot';
import type Message from '../structures/Message';
import { LavaLinkOptions } from '../types/Interfaces';
declare class Lavalink extends Manager {
    constructor(client: Bot, host: string, port: number, password: string, options?: LavaLinkOptions);
    player(message: Message, selfDeafen?: boolean, selfMute?: boolean): import("erela.js").Player;
}
export default Lavalink;
//# sourceMappingURL=LavaLink.d.ts.map