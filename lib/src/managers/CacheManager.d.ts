import type Bot from '../Bot';
import { CacheTypes } from '../types/Types';
declare class CacheManager {
    bot: Bot;
    constructor(bot: Bot);
    manage(type: CacheTypes, key: string, value: any): boolean;
}
export default CacheManager;
//# sourceMappingURL=CacheManager.d.ts.map