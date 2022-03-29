
function plusMinus(arr) {
  let total = 0
  let positive = 0
  let zero = 0
  let negative = 0
  arr.map(el => {
    let sign = Math.sign(el)

    switch (sign) {
      case -1:
        negative++
        total++
        break;
      case 1:
        positive++
        total++
        break;
      case 0:
        zero++
        total++
        break;
    }
  })

  function divideNum(num) {
    let decimal = +num / total
    let decimals = parseFloat(decimal).toFixed(6)
    return decimals
  }

  console.log(divideNum(positive));
  console.log(divideNum(negative));
  console.log(divideNum(zero));

}

let numArray = [-4, 3, -9, 0, 4, 1]

plusMinus(numArray)