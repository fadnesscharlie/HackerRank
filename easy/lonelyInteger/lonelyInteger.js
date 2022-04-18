
function lonelyinteger(a) {
  let result = []

    a.map(el => {
      let index = result.indexOf(el)

      if(index === -1) {
        result.push(el)
      } else {
        result.splice(index, 1)
      }

    })

  return result
}

let lonelyArray = [1, 2, 3, 4, 3, 2, 1]

console.log(lonelyinteger(lonelyArray))

module.exports = lonelyinteger