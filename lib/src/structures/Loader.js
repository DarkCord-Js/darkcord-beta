"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandLoader = CommandLoader;
exports.EventLoader = EventLoader;

var _fs = _interopRequireDefault(require("fs"));

var _path2 = _interopRequireDefault(require("path"));

var _isClass = _interopRequireDefault(require("../util/isClass"));

var _isConstructor = _interopRequireDefault(require("../util/isConstructor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const commandsLoaded = [];
const eventsLoaded = [];

async function CommandLoader(client, _path = './darkcord/commands') {
  var _require$main;

  const dir = _path2.default.join(_path2.default.dirname((_require$main = require.main) === null || _require$main === void 0 ? void 0 : _require$main.filename), _path);

  _fs.default.readdir(_path2.default.resolve(dir), (err, __) => {
    if (err) throw err;

    for (const pof of __) {
      if (_fs.default.lstatSync(_path2.default.join(dir, pof)).isDirectory()) {
        _fs.default.readdir(_path2.default.join(_path, pof), (err, files) => {
          if (err) throw err;
          files = files.filter(file => file.endsWith('.js'));

          for (const file of files) {
            const _dir = _path2.default.relative(dir, _path2.default.join(_path, file));

            LoadCommando(client, _dir, file);
          }
        });
      } else {
        if (pof.endsWith('.js')) {
          const _dir = _path2.default.relative(dir, _path2.default.join(_path, pof));

          LoadCommando(client, _dir, pof);
        }
      }
    }
  });

  const r = {
    loaded: commandsLoaded,
    path: dir
  };
  return r;
}

function LoadCommando(client, _dir, file) {
  let commando = require(_dir);

  if (commando.default) {
    commando = commando.default;
  }

  if ((0, _isClass.default)(commando)) {
    if ((0, _isConstructor.default)(commando)) {
      var _commando$options;

      commando = new commando();
      const name = ((_commando$options = commando.options) === null || _commando$options === void 0 ? void 0 : _commando$options.name) ?? commando.name;

      if (name) {
        commandsLoaded.push(name);
        client.commands.set(name, commando);
      } else {
        throw new Error(`Missing command name.\nFile: ${file}`);
      }
    } else {
      var _commando$options2;

      const name = ((_commando$options2 = commando.options) === null || _commando$options2 === void 0 ? void 0 : _commando$options2.name) ?? commando.name;

      if (name) {
        commandsLoaded.push(name);
        client.commands.set(name, commando);
      } else {
        throw new Error(`Missing command name.\nFile: ${file}`);
      }
    }
  } else {
    throw new Error(`File ${file} is not a class.`);
  }
}

function EventLoader(client, _path = './darkcord/events') {
  var _require$main2;

  const dir = _path2.default.join(_path2.default.dirname((_require$main2 = require.main) === null || _require$main2 === void 0 ? void 0 : _require$main2.filename), _path);

  _fs.default.readdir(_path2.default.resolve(dir), (err, __) => {
    if (err) throw err;

    for (const pof of __) {
      if (_fs.default.lstatSync(_path2.default.join(dir, pof)).isDirectory()) {
        _fs.default.readdir(_path2.default.join(_path, pof), (err, files) => {
          if (err) throw err;
          files = files.filter(file => file.endsWith('.js'));

          for (const file of files) {
            const _dir = _path2.default.relative(dir, _path2.default.join(_path, file));

            LoadEvent(client, _dir, file);
          }
        });
      } else {
        if (pof.endsWith('.js')) {
          const _dir = _path2.default.relative(dir, _path2.default.join(_path, pof));

          LoadEvent(client, _dir, pof);
        }
      }
    }
  });

  const r = {
    loaded: eventsLoaded,
    path: dir
  };
  return r;
}

function LoadEvent(client, _dir, file) {
  let event = require(_dir);

  if (event.default) {
    event = event.default;
  }

  if ((0, _isClass.default)(event)) {
    if ((0, _isConstructor.default)(event)) {
      var _event$options;

      event = new event();
      const name = ((_event$options = event.options) === null || _event$options === void 0 ? void 0 : _event$options.name) ?? event.name;

      if (name) {
        eventsLoaded.push(name);

        if (event.execute) {
          client.on(name, (...args) => event.execute(...args));
        } else {
          throw new Error(`Missing event execute.\nFile: ${file}`);
        }
      } else {
        throw new Error(`Missing event name.\nFile: ${file}`);
      }
    } else {
      var _event$options2;

      const name = ((_event$options2 = event.options) === null || _event$options2 === void 0 ? void 0 : _event$options2.name) ?? event.name;

      if (name) {
        commandsLoaded.push(name);

        if (event.execute) {
          client.on(name, (...args) => event.execute(...args));
        } else {
          throw new Error(`Missing event execute.\nFile: ${file}`);
        }
      } else {
        throw new Error(`Missing event name.\nFile: ${file}`);
      }
    }
  } else {
    throw new Error(`File ${file} is not a class.`);
  }
}