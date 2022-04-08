function miniMaxSum(arr) {
  let total = 0;
  arr.forEach(el => total = total + +el)

  let max = 0
  let min = total
  arr.forEach(el => {
    let result = total - el
    if(result < min) min = result
    if(result > max) max = result
  })

  console.log(min, max);
}


let arr = [1, 2, 3, 4, 5]
miniMaxSum(arr)