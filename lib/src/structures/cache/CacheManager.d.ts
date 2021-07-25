import type Bot from '../../Bot';
import { CacheTypes } from '../../types/Types';
declare class CacheManager {
    client: Bot;
    constructor(client: Bot);
    manage(type: CacheTypes, key: string, value: any): boolean;
}
export default CacheManager;
//# sourceMappingURL=CacheManager.d.ts.map