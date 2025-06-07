"use strict";
// export class LinkedList<T>{
//     head: LNode<T> | null = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LNode = void 0;
//     append(val:string|number){
//         if(this.head === null) this.head= new LNode(val);
//         else{
//             let current = this.head;
//             while(current.next!==null){
//                 current=current?.next;
//             }
//             current.next=new LNode(val);
//         }
//     }
// }
class LNode {
    constructor(key, val) {
        this.val = val;
        this.key = key;
        this.next = null;
    }
}
exports.LNode = LNode;
