import type Client from '../../Client';
import { CacheTypes } from '../../types/Types';
declare class CacheManager {
    client: Client;
    constructor(client: Client);
    manage(type: CacheTypes, key: string, value: any): boolean;
}
export default CacheManager;
//# sourceMappingURL=CacheManager.d.ts.map