var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        //splice<T>(start: number = 0, deleteCount: number = 1): T[] {}
    }
    MartinsArray.prototype.concat = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.list = __spreadArray(__spreadArray([], this.list, true), args, true);
        var i = 0;
        while (args[i] != null) {
            this.length += 1;
            i++;
        }
    };
    MartinsArray.prototype.push = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.list = __spreadArray(__spreadArray([], this.list, true), args, true);
        var i = 0;
        while (args[i] != null) {
            this.length += 1;
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
    MartinsArray.prototype.includes = function (searchElement, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        for (var i = fromIndex; i < this.length; i++) {
            if (searchElement === this.list[i])
                return true;
        }
        return false;
    };
    MartinsArray.prototype.pop = function () {
        var lastElement = this.list[this.length - 1], newArr = [];
        for (var i = 0; i < this.length - 1; i++) {
            newArr[i] = this.list[i];
        }
        this.list = newArr;
        this.length -= 1;
        return lastElement;
    };
    MartinsArray.prototype.indexOf = function (searchElement, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        for (var i = fromIndex; i < this.length; i++) {
            if (searchElement === this.list[i])
                return i;
        }
        return -1;
    };
    MartinsArray.prototype.join = function (seperator) {
        if (seperator === void 0) { seperator = ","; }
        var str = "", i = 0;
        while (i < this.length) {
            str += this.list[i];
            if (i + 1 !== this.length)
                str += seperator;
            i++;
        }
        return str;
    };
    MartinsArray.prototype.keys = function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < this.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, this.list[i]];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    MartinsArray.prototype.lastIndexOf = function (searchElement, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var currIndex = -1;
        for (var i = fromIndex; i < this.length; i++) {
            if (searchElement === this.list[i])
                currIndex = i;
        }
        return currIndex;
    };
    MartinsArray.prototype.map = function (callback) {
        var mapResult = [];
        for (var i = 0; i < this.length; i++) {
            mapResult[i] = callback(this.list[i], i, this.list);
        }
        return mapResult;
    };
    MartinsArray.prototype.reduce = function (callback, initialValue) {
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }
        var accumulator, startIndex;
        if (initialValue !== undefined) {
            accumulator = initialValue;
            startIndex = 0;
        }
        else {
            if (this.length === 0) {
                throw new TypeError("Reduce of empty array with no initial value");
            }
            accumulator = this.list[0];
            startIndex = 1;
        }
        for (var i = startIndex; i < this.length; i++) {
            accumulator = callback(accumulator, this.list[i], i, this.list);
        }
        return accumulator;
    };
    MartinsArray.prototype.reverse = function () {
        var i = 0, j = this.length - 1;
        while (i < j) {
            var temp = this.list[i];
            this.list[i] = this.list[j];
            this.list[j] = temp;
            i++, j--;
        }
        return this.list;
    };
    MartinsArray.prototype.unshift = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.list = __spreadArray(__spreadArray([], args, true), this.list, true);
        var i = 0;
        while (args[i] != null) {
            this.length += 1;
            i++;
        }
    };
    MartinsArray.prototype.shift = function () {
        var newArr = [];
        for (var i = 1; i < this.length; i++) {
            newArr[i - 1] = this.list[i];
        }
        this.list = newArr;
        this.length -= 1;
    };
    MartinsArray.prototype.slice = function (start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = this.length; }
        if (start < 0)
            start = this.length + start < 0 ? 0 : this.length + start;
        if (end < 0)
            end = this.length + end < 0 ? 0 : this.length + end;
        console.log(start, end);
        var newArr = [], j = 0;
        for (var i = start; i < end; i++) {
            newArr[j] = this.list[i];
            j++;
        }
        return newArr;
    };
    return MartinsArray;
}());
