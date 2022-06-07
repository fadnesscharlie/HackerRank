
var maximumWealth = function(accounts) {
  if (!accounts) return 0

  let richest = 0

  for(let i = 0; i < accounts.length; i++) {
    let tempMax = 0;
    for(let j = 0; j < accounts[i].length; j++) {
      tempMax+= accounts[i][j]
    }
    if(tempMax > richest) richest = tempMax
  }
  return richest
};

let params = [[1,5],[7,3],[3,5]]
let accounts = [[2,8,7],[7,1,3],[1,9,5]]

console.log('Result', maximumWealth(params))
console.log('Result', maximumWealth(accounts))