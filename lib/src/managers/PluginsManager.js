"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginsManager {
    client;
    pluginsLimit;
    pluginsArray = [];
    plugins;
    constructor(client, pluginsLimit = 5, plugins) {
        this.client = client;
        this.pluginsLimit = pluginsLimit;
        this.pluginsArray = plugins;
        this.plugins = {};
    }
    loadPlugins() {
        for (const plugin of this.pluginsArray) {
            if (this.size > this.pluginsLimit) {
                throw new Error(`Plugin limit reached. (${this.size}/${this.pluginsLimit})`);
            }
            if (plugin.startOnReady) {
                if (plugin.type === 'client') {
                    this.client.on('ready', () => plugin.exec(this.client));
                }
                this.client.on('ready', () => plugin.exec());
            }
            this.plugins[plugin.name] = plugin;
        }
    }
    listPlugins() {
        return this.pluginsArray.filter((plugin) => plugin.name);
    }
    runPlugin(pluginName) {
        const plugin = this.plugins[pluginName];
        if (plugin.type === 'client') {
            return plugin.exec(this.client);
        }
        else {
            plugin.exec();
        }
    }
    get size() {
        return this.pluginsArray.length + 1;
    }
}
exports.default = PluginsManager;
