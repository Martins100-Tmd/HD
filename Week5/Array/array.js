var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MartinsArray = /** @class */ (function () {
    function MartinsArray() {
        this.length = 0;
        this.list = [];
    }
    MartinsArray.prototype.concat = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.list = __spreadArray(__spreadArray([], this.list, true), args, true);
        var i = 0;
        while (args[i] != null) {
            this.length + 1;
            i++;
        }
    };
    MartinsArray.prototype.log = function () {
        console.log(this.list);
    };
    MartinsArray.prototype.every = function (callback) {
        for (var i = 0; i < this.list.length; i++) {
            if (!callback(this.list[i], i, this.list)) {
                return false;
            }
        }
        return true;
    };
    MartinsArray.prototype.fill = function (value, start, end) {
        for (var i = start; i < end; i++) {
            this.list[i] = value;
        }
    };
    MartinsArray.prototype.filter = function (callback) {
        var passList = [];
        for (var i = 0; i < this.list.length; i++) {
            if (callback(this.list[i], i, this.list)) {
                passList.push(this.list[i]);
            }
        }
        return passList;
    };
    MartinsArray.prototype.find = function (callback) {
        for (var i = 0; i < this.list.length; i++) {
            if (callback(this.list[i], i, this.list) === true) {
                return this.list[i];
            }
        }
        return undefined;
    };
    MartinsArray.prototype.findIndex = function (callback) {
        for (var i = 0; i < this.list.length; i++) {
            if (callback(this.list[i], i, this.list) === true) {
                return i;
            }
        }
        return -1;
    };
    MartinsArray.prototype.forEach = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback(this.list[i], i, this.list);
        }
    };
    return MartinsArray;
}());
var M1 = new MartinsArray();
M1.concat(1, 2, 3, 4);
M1.log();
console.log(M1.every(function (x) { return x <= 4; }));
//M1.fill(0, 1, 3)
console.log(M1.list);
console.log(M1.filter(function (x) { return x % 2 == 0; }));
console.log(M1.findIndex(function (x) { return x % 4 == 0; }));
