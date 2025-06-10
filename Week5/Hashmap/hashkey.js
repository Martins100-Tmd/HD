"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hashkey;
function Hashkey(key, size) {
    var hash = 0;
    if (key.length === 0)
        return hash;
    for (var i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    console.log(hash, size);
    return hash % size;
}
console.log(Hashkey("Martins", 100));
