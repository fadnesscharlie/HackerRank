function fizzBuzz(n) {
  let results = [];

  for (let i = 1; i < n + 1; i++) {
    switch (true) {
      case (i % 3 === 0) && (i % 5 === 0):
        results.push("FizzBuzz");
        break;
      case (i % 3 === 0):
        results.push("Fizz");
        break;
      case (i % 5 === 0):
        results.push("Buzz");
        break;
      default:
        results.push(String(i));
        break;
    }
  }
  return results;
}
