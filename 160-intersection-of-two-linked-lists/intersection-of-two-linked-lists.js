/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    
    let p1 =headA;
    let p2 =headB;
    
    while(p1){
        set.add(p1);
        p1 = p1.next;
    }
    
    while(p2){
       if( set.has(p2)){
           return p2;
       }
        p2 = p2.next;
    }
return null;
};