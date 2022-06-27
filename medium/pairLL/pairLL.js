class ListNode {
  constructor(val = 0, next=null) {
    this.val = val,
    this.next = next
  }
}

function pairLL(linkedList) {
  let dummy = new ListNode(0, linkedList.head)
  let current = dummy;


  while (current.next && current.next.next) {
    
    // Holds the first pair
    let temp = current.next;
    
    // Holds the second pair
    let next = current.next.next

    temp.next = next.next
    next.next = temp
    current.next = next
    
    current = current.next.next
  }
  return dummy.next.next;
}

const linkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null,
          },
        },
      },
    },
  },
};

console.log("Result: ", pairLL(linkedList));
