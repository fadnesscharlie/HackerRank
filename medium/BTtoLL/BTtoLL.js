function flatten(root) {
  function _walk(node) {
    if(node === null) return
    if (node.right === null && node.left === null) return;

    if (node.left) _walk(node.left);

    if (node.right) {
      let temp = node.right;
      node.right = node.left;
      node.left = null;

      let curr = node.right
      while (curr.right != null) {
        curr = curr.right;
      }
      curr.right = temp;
    }
  }
  _walk(root);
  console.log(root)
  // return root
}

const binaryTree = {
  val: 1,
  right: {
    val: 5,
    right: {
      val: 6,
    },
  },
  left: {
    val: 2,
    right: {
      val: 4,
    },
    left: {
      val: 3,
    },
  },
};

console.log("result: ", flatten(binaryTree));
