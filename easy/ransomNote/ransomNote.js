let canConstruct = function (ransomNote, magazine) {
	let magArr = magazine.split("")
  for(let i of ransomNote) {
		let isInside = magArr.indexOf(i)
		if(isInside === -1) return false
		magArr[isInside] = 0
    console.log('magArr', magArr);
}
	return true
}

console.log('Result ', canConstruct('googls', 'google'))