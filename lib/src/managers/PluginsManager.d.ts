import Bot from '../Bot';
import type { Plugin } from '../types/Interfaces';
declare class PluginsManager {
    private client;
    pluginsLimit: number;
    private pluginsArray;
    plugins: Record<string, Plugin>;
    constructor(client: Bot, pluginsLimit: number, plugins: Plugin[]);
    loadPlugins(): void;
    listPlugins(): Plugin[];
    runPlugin(pluginName: string): void;
    get size(): number;
}
export default PluginsManager;
//# sourceMappingURL=PluginsManager.d.ts.map