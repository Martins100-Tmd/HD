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
        this.current = null;
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
        console.log(this.length);
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
        var _a;
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
        console.log("Now playing (shuffled):", (_a = this.current) === null || _a === void 0 ? void 0 : _a.song);
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
    };
    songDoublyLinkedList.prototype.prntNext = function () {
        var curr = this.head;
        while (curr !== null) {
            console.log(curr.song);
            curr = curr.next;
        }
    };
    songDoublyLinkedList.prototype.prntPrev = function () {
        var curr = this.tail;
        while (curr !== null) {
            console.log(curr.song);
            curr = curr.prev;
        }
    };
    return songDoublyLinkedList;
}());
var A = new songDoublyLinkedList(["songA", "songB", "songC", "songD", "songE"]);
A.add("songF");
A.prntNext();
//console.dir(A.head, { depth: Infinity });
console.log("\n");
A.prntPrev();
console.log("\n");
A.shuffle();
