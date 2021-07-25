import Bot from '../Bot';
import Collection from '../collection/Collection';
import Shard from './Shard';
declare class ShardManager extends Collection<string, Shard> {
    private client;
    constructor(client: Bot);
    spawn(id: string): void;
}
export default ShardManager;
//# sourceMappingURL=ShardManager.d.ts.map