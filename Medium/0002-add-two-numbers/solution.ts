/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let resultList = new ListNode(0);
    let current = resultList;

    while (l1 || l2 || carry) {
        const val1 = l1?.val ?? 0;
        const val2 = l2?.val ?? 0;
        let sum = carry + val1 + val2;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;

        carry = sum >= 10 ? 1 : 0;
        sum -= sum >= 10 ? 10 : 0;

        current.next = new ListNode(sum);
        current = current.next;
    }

    return resultList.next;
};
