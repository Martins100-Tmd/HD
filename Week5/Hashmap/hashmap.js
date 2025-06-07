"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bucket_1 = require("./bucket");
var hashkey_1 = require("./hashkey");
var Hashmap = /** @class */ (function () {
    function Hashmap(size) {
        this.Map = [];
        this.size = size;
        this.Map = new Array(size).fill(null);
    }
    Hashmap.prototype.setVal = function (key, val) {
        var hashkey = (0, hashkey_1.default)(key, this.size);
        var bucketIndex = this.Map[hashkey];
        if (bucketIndex === null) {
            this.Map[hashkey] = new bucket_1.LNode(key, val);
        }
        else {
            var curr = this.Map[hashkey];
            while (curr.next !== null) {
                if (curr.key === key) {
                    console.log(curr.key, key);
                    curr.val = val;
                    break;
                }
                ;
                curr = curr.next;
            }
            curr.next = new bucket_1.LNode(key, val);
        }
    };
    return Hashmap;
}());
var A = new Hashmap(100);
A.setVal("Martins", "Olumide");
A.setVal("ws", 50);
A.setVal('ws', 100);
console.dir(A, { depth: Infinity });
