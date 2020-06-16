'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var isProduction = process.env.NODE_ENV === 'production';

var log = function log(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'log';
  var showInProduction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (isProduction && !showInProduction) {
    return void 0;
  }

  return console[type](message);
};

var _default = log;
exports["default"] = _default;