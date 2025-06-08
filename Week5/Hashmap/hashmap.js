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
        this.Map = [];
        this.size = size;
        this.Map = new Array(size).fill(null);
    }
    Hashmap.prototype.setVal = function (key, val) {
        var hashkey = (0, hashkey_1.default)(key, this.size);
        var curr = this.Map[hashkey];
        if (curr === null) {
            this.Map[hashkey] = new LNode(key, val);
            return;
        }
        else {
            var help = curr;
            while (curr !== null) {
                if (curr.key === key) {
                    curr.val = val;
                    return;
                }
                help = curr;
                curr = curr.next;
            }
            help.next = new LNode(key, val);
        }
    };
    Hashmap.prototype.getVal = function (key) {
        var hashkey = (0, hashkey_1.default)(key, this.size);
        var curr = this.Map[hashkey];
        if (curr === null)
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
    return Hashmap;
}());
var A = new Hashmap(100);
A.setVal("Martins", "Olumide");
A.setVal("David", 50);
A.setVal("Martins", 100);
A.setVal("Martins", 200);
A.setVal("uu", 1000);
A.setVal("uuuu", "Portis");
console.log(A.getVal("David"));
//console.dir(A, { depth: Infinity });
