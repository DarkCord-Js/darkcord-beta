import Client from '../Client';
import Collection from '../collection/Collection';
import Shard from './Shard';
declare class ShardManager extends Collection<string, Shard> {
    private client;
    constructor(client: Client);
    spawn(id: string): void;
}
export default ShardManager;
//# sourceMappingURL=ShardManager.d.ts.map