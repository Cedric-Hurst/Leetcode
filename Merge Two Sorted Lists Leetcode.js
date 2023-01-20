/*

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/

var mergeTwoLists = function(list1, list2) {
    let head = new ListNode, tail;
    if(!list1 && !list2) return list1;
    if(list1 && !list2) return list1;
    if(!list1 && list2) return list2;
    if(list1.val < list2.val){
        head = list1
        list1 = list1.next
    } else {
        head = list2
        list2 = list2.next
    }
    tail = head
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1
            tail = tail.next
            list1 = list1.next
        } else {
            tail.next = list2
            tail = tail.next
            list2 = list2.next
        }
    }
     tail.next = list1 || list2

    return head;
};