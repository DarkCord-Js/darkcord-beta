"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CommandContext = _interopRequireDefault(require("./CommandContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Command {
  constructor(CommandOptions) {
    /** Command Options */
    this.options = {
      name: CommandOptions.name,
      description: CommandOptions === null || CommandOptions === void 0 ? void 0 : CommandOptions.description,
      category: CommandOptions === null || CommandOptions === void 0 ? void 0 : CommandOptions.category,
      guildOnly: (CommandOptions === null || CommandOptions === void 0 ? void 0 : CommandOptions.guildOnly) ?? true,
      dmOnly: (CommandOptions === null || CommandOptions === void 0 ? void 0 : CommandOptions.dmOnly) ?? false,
      ignoreBots: (CommandOptions === null || CommandOptions === void 0 ? void 0 : CommandOptions.ignoreBots) ?? true,
      ignoreUsers: (CommandOptions === null || CommandOptions === void 0 ? void 0 : CommandOptions.ignoreUsers) ?? [],
      ignoreGuilds: (CommandOptions === null || CommandOptions === void 0 ? void 0 : CommandOptions.ignoreGuilds) ?? [],
      ownerOnly: (CommandOptions === null || CommandOptions === void 0 ? void 0 : CommandOptions.ownerOnly) ?? false,
      examples: CommandOptions === null || CommandOptions === void 0 ? void 0 : CommandOptions.examples
    };
  }

  execute(ctx, args) {
    var _ctx$client;

    (_ctx$client = ctx.client) === null || _ctx$client === void 0 ? void 0 : _ctx$client.emit('command', this.options);
  }

}

Command.createContext = obj => {
  return new _CommandContext.default(obj.message, obj.client);
};

var _default = Command;
exports.default = _default;