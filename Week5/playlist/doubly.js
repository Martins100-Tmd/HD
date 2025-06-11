"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var songNode = /** @class */ (function () {
    function songNode(song) {
        this.song = song;
        this.prev = null;
        this.next = null;
    }
    return songNode;
}());
var songDoublyLinkedList = /** @class */ (function () {
    function songDoublyLinkedList(songs) {
        this.head = null;
        this.tail = null;
        this.current = new songNode(songs[0]);
        this.length = 0;
        this.currentIndex = 0;
        for (var i = 0; i < songs.length; i++) {
            this.add(songs[i]);
        }
    }
    songDoublyLinkedList.prototype.add = function (str) {
        var newNode = new songNode(str);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }
        this.length += 1;
    };
    songDoublyLinkedList.prototype.next = function () {
        var _a, _b;
        this.current = (_b = (_a = this.current) === null || _a === void 0 ? void 0 : _a.next) !== null && _b !== void 0 ? _b : null;
    };
    songDoublyLinkedList.prototype.prev = function () {
        var _a, _b;
        this.current = (_b = (_a = this.current) === null || _a === void 0 ? void 0 : _a.prev) !== null && _b !== void 0 ? _b : null;
    };
    songDoublyLinkedList.prototype.repeat = function () {
        this.current = this.current;
    };
    songDoublyLinkedList.prototype.shuffle = function () {
        if (this.length === 0)
            return;
        var randomIndex = Math.floor(Math.random() * this.length);
        var useReverseSearch = randomIndex > this.length / 2;
        var currentNode = useReverseSearch ? this.tail : this.head;
        for (var i = 0; i < randomIndex; i++) {
            if (!currentNode)
                break;
            currentNode = useReverseSearch ? currentNode.prev : currentNode.next;
        }
        this.current = currentNode !== null && currentNode !== void 0 ? currentNode : (useReverseSearch ? this.tail : this.head);
        this.prntNext();
    };
    songDoublyLinkedList.prototype.setCurrentSong = function (song) {
        var searchFromHead = this.currentIndex < Math.floor(this.length / 2);
        var curr = searchFromHead ? this.head : this.tail;
        var moveFn = function (node) { return (searchFromHead ? node.next : node.prev); };
        while (curr !== null) {
            if (curr.song === song) {
                this.current = curr;
            }
            curr = moveFn(curr);
        }
        this.prntNext();
    };
    songDoublyLinkedList.prototype.prntNext = function () {
        var _a;
        var curr = this.head, output = "";
        while (curr !== null) {
            output += "\u001B[34m".concat(curr.song, "\u001B[0m");
            curr = curr.next;
            output += (curr === null || curr === void 0 ? void 0 : curr.prev) ? " -> " : "";
        }
        console.log("\u001B[33mPlaylist:\u001B[0m ".concat(output, "\n\u001B[33mCurrent:\u001B[0m \u001B[32m").concat((_a = this.current) === null || _a === void 0 ? void 0 : _a.song, "\u001B[0m"));
    };
    songDoublyLinkedList.prototype.prntPrev = function () {
        var _a;
        var curr = this.tail, output = "";
        while (curr !== null) {
            output += "\u001B[31m".concat(curr.song, "\u001B[0m");
            curr = curr.prev;
            output += (curr === null || curr === void 0 ? void 0 : curr.next) ? " -> " : "";
        }
        console.log("\u001B[33mPlaylist:\u001B[0m ".concat(output, "\n\u001B[33mCurrent:\u001B[0m \u001B[32m").concat((_a = this.current) === null || _a === void 0 ? void 0 : _a.song, "\u001B[0m"));
    };
    return songDoublyLinkedList;
}());
var A = new songDoublyLinkedList(["songA", "songB", "songC", "songD", "songE"]);
A.add("songF");
A.prntNext();
A.shuffle();
A.setCurrentSong("songF");
