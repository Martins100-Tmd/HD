"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hashkey_1 = require("./hashkey");
var LNode = /** @class */ (function () {
    function LNode(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
    }
    return LNode;
}());
var Hashmap = /** @class */ (function () {
    function Hashmap(size) {
        this.size = size;
        this.Map = new Array(size).map(function (_) { return null; });
    }
    Hashmap.prototype.setVal = function (key, val) {
        var index = (0, hashkey_1.default)(key, this.size);
        var node = this.Map[index];
        if (!node) {
            this.Map[index] = new LNode(key, val);
            return;
        }
        var curr = node;
        while (curr !== null) {
            if (curr.key === key) {
                curr.val = val;
                return;
            }
            if (curr.next === null)
                break;
            curr = curr.next;
        }
        curr.next = new LNode(key, val);
    };
    Hashmap.prototype.getVal = function (key) {
        var hashkey = (0, hashkey_1.default)(key, this.size);
        var curr = this.Map[hashkey];
        if (!curr)
            return undefined;
        else {
            while (curr !== null) {
                if (curr.key === key)
                    return curr.val;
                curr = curr.next;
            }
        }
        return undefined;
    };
    Hashmap.prototype.removeKey = function (key) {
        var _a;
        var hashkey = (0, hashkey_1.default)(key, this.size);
        var curr = this.Map[hashkey];
        if (!curr)
            return undefined;
        else {
            var help = curr;
            if (help.key === key) {
                var temp = help.next;
                this.Map[hashkey] = temp;
                return help.val;
            }
            else {
                while (curr !== null) {
                    if (curr.next.key === key) {
                        var temp = curr.next.next;
                        var rA = (_a = curr.next) === null || _a === void 0 ? void 0 : _a.val;
                        curr.next = temp;
                        return rA;
                    }
                    curr = curr.next;
                }
            }
        }
    };
    return Hashmap;
}());
