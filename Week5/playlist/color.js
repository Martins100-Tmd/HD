"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorize = void 0;
var colorize = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return ({
        black: "\u001B[30m".concat(args.join(" ")),
        red: "\u001B[31m".concat(args.join(" ")),
        green: "\u001B[32m".concat(args.join("")),
        yellow: "\u001B[33m".concat(args.join(" ")),
        blue: "\u001B[34m".concat(args.join(" ")),
        magenta: "\u001B[35m".concat(args.join(" ")),
        cyan: "\u001B[36m".concat(args.join(" ")),
        white: "\u001B[37m".concat(args.join(" ")),
        bgBlack: "\u001B[40m".concat(args.join(" "), "\u001B[0m"),
        bgRed: "\u001B[41m".concat(args.join(" "), "\u001B[0m"),
        bgGreen: "\u001B[42m".concat(args.join(" "), "\u001B[0m"),
        bgYellow: "\u001B[43m".concat(args.join(" "), "\u001B[0m"),
        bgBlue: "\u001B[44m".concat(args.join(" "), "\u001B[0m"),
        bgMagenta: "\u001B[45m".concat(args.join(" "), "\u001B[0m"),
        bgCyan: "\u001B[46m".concat(args.join(" "), "\u001B[0m"),
        bgWhite: "\u001B[47m".concat(args.join(" "), "\u001B[0m"),
    });
};
exports.colorize = colorize;
