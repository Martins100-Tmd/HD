"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rand = void 0;
var randomNumber = /** @class */ (function () {
    function randomNumber() {
        this.hash = {};
    }
    randomNumber.prototype.num = function (size) {
        var random = Math.floor(Math.random() * size);
        if (Object.keys(this.hash).length === size)
            return -1;
        while (true) {
            console.log(random);
            if (this.hash[random] === undefined) {
                return random;
            }
            random = Math.random();
        }
    };
    return randomNumber;
}());
var rand = function (size) { return new randomNumber().num(size); };
exports.rand = rand;
