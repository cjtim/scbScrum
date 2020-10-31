// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const resp = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
      resp.push({num: i, val: "fizzbuzz"})
      continue
    } else if (i % 3 === 0) {
      resp.push({num: i, val: "fizz"})
      console.log("fizz");
      continue
    } else if (i % 5 === 0) {
      resp.push({num: i, val: "buzz"})
      console.log("buzz");
      continue
    }
    resp.push({num: i, val: i})
    console.log(i);
  }
  //resp = [{num: x, val: y}]
  return resp;
}

module.exports = fizzBuzz;
