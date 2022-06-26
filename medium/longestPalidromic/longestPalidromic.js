function longestPalindrome(string) {
  let compare, palEnd, result, left;

  for (let i = 0; i < string.length - 1; i++) {
    if (palEnd) {
      _walk(left + 1, palEnd - 1);
    }
    if (result) return result;
    for (let j = 1; j < string.length - 1; j++) {
      if (string[i] === string[j]) {
        left = i;
        palEnd = j;
      }
    }
  }

  function _walk(first, last) {
    if (first === last) {
      result = string.slice(left, palEnd+1);
      return;
    }
    if (first % last === 1) {
      result = string.slice(left, palEnd+1);
      return;
    }

    let start = string[first];
    let end = string[last];

    if (start === end) _walk(start + 1, end - 1);
  }

  return (result = null);
}

let s = 'babad'

console.log('result', longestPalindrome(s))