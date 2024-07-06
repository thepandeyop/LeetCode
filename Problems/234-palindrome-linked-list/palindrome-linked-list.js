/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let node = slow;
    while (node) {
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }

    let front = head;
    let reverse = prev;
    while (reverse) {
        if (front.val !== reverse.val) return false;
        front = front.next;
        reverse = reverse.next;
    }

    return true;
};