/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    if (!head) return head;

    let temp = head;
    temp = temp.next; // skip 1st 0

    let before_newHead = new ListNode();
    let temp2 = before_newHead;

    let sum = 0;
    while (temp) {
        if (temp.val === 0) {
            temp2.next = new ListNode(sum);
            temp2 = temp2.next;
            sum = 0;
        } else {
            sum += temp.val;
        }
        temp = temp.next;
    }

    return before_newHead.next;
};