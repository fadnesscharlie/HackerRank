class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class linkedList {
  constructor() {
    this.tail = null;
    this.head = null;
  }
}

let addTwoNumbers = function (l1, l2) {
  let LL = new linkedList();
  let l1Values;
  let l2Values;
  let ifOver10 = false;

  while (l1 || l2) {
    l1 === null || l1.val === null ? (l1Values = 0) : (l1Values = l1.val);
    l2 === null || l2.val === null ? (l2Values = 0) : (l2Values = l2.val);

    let sum = l1Values + l2Values;

    if (ifOver10) {
      sum++;
      ifOver10 = false;
    }
    if (sum >= 10) {
      sum = sum - 10;
      ifOver10 = true;
    }

    let newValue = new ListNode(sum);
    if (LL.head === null) {
      LL.head = newValue;
      LL.tail = LL.head;
    } else {
      LL.tail.next = newValue;
      LL.tail = newValue;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (ifOver10) {
    let lastVal = new ListNode(1);
    LL.tail.next = lastVal;
    LL.tail = lastVal;
  }
  return LL.head;
};

function moveLL(l1, l2) {
  let queue = [];
  let queue2 = [];
  while (l1 !== null || l2 !== null) {
    queue.push(l1.val);
    queue2.push(l2.val);
    l1 = l1.next;
    l2 = l2.next;
  }
  return { queue, queue2 };
}

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 9,
        next: null,
      },
    },
  },
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: {
        val: 9,
        next: null,
      },
    },
  },
};

let result = addTwoNumbers(l1, l2);
console.log("result", result);

// let move = moveLL(l1, l2)
// console.log('move', move);
