// export class LinkedList<T>{
//     head: LNode<T> | null = null;

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

export class LNode<T>{
     key:string;
    val:string|number;
    next:LNode<T>| null;

    constructor(key:string,val:string|number){
        this.val = val;
        this.key = key;
        this.next = null;
    }
}