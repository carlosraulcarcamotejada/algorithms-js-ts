export const mergeTwoList = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let dummy = new ListNode(0);
  let head = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  l1 !== null ? (dummy.next = l1) : (dummy.next = l2);

  return head.next;
};

export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

  // public addNode = (value: number) => {
  //   if (this.next === null) {
  //     if (this.value < value) {
  //       this.next = new ListNode(value);
  //     } else {
  //       this.next = new ListNode(this.value);
  //       this.value = value;
  //     }
  //   } else {
  //   }
  // };
}

/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
ListNode l1 = [1,2,4];
ListNode l2 = [1,3,4];
ListNode mergedNodeList = [1,1,2,3,4,4];
*/
