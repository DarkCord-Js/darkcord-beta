import Bot from '../Bot';
import type { Plugin } from '../types/Interfaces';
declare class PluginsManager {
    private bot;
    pluginsLimit: number;
    private pluginsArray;
    plugins: Record<string, Plugin>;
    constructor(bot: Bot, pluginsLimit: number, plugins: Plugin[]);
    loadPlugins(): void;
    listPlugins(): Plugin[];
    runPlugin(pluginName: string): void;
    get size(): number;
}
export default PluginsManager;
//# sourceMappingURL=PluginsManager.d.ts.map