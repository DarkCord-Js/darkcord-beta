"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginsManager {
    bot;
    pluginsLimit;
    pluginsArray = [];
    plugins;
    constructor(bot, pluginsLimit = 5, plugins) {
        this.bot = bot;
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
                if (plugin.type === 'bot') {
                    this.bot.on('ready', () => plugin.exec(this.bot));
                }
                this.bot.on('ready', () => plugin.exec());
            }
            this.plugins[plugin.name] = plugin;
        }
    }
    listPlugins() {
        return this.pluginsArray.filter((plugin) => plugin.name);
    }
    runPlugin(pluginName) {
        const plugin = this.plugins[pluginName];
        if (plugin.type === 'bot') {
            return plugin.exec(this.bot);
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
