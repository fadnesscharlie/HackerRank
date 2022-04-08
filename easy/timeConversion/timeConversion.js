function timeConversion(s) {
  // console.log('Starting Value', s);

  // helper function 
  String.prototype.replaceAt = function(index, char) {
    let str = this.split('');
    str[index] = char
    // str.pop()
    // str.pop()
    return str.join('');
  }

  if(s[8] === 'A') {
    if(s[0] === '1' && s[1] === '2') {
      s = s.replaceAt(0, 0)
      s = s.replaceAt(1, 0)

    }
  }

  if(s[8] === 'P') {
    if( s[1] <= 7) {
      s = s.replaceAt(0, 1)
      s = s.replaceAt(1, +s[1] + 2)
      // console.log('s', s);
    }
    if( s[1] >= 8) {
      s = s.replaceAt(0, 2)
      s = s.replaceAt(0, +s[1] + 2 - 10)
    }
  }

  

  function takeOut(s) {
    let str = s.split('')
    str.splice(8)
    return str.join('')
  }

  let result = takeOut(s)
  
  console.log(result)
}

let date1 = '07:05:45PM'
let date2 = '01:59:59PM'
let date3 = '01:59:59AM'
let date4 = '12:59:59AM'

timeConversion(date1)
timeConversion(date2)
timeConversion(date3)
timeConversion(date4)