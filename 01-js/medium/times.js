/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  //   let start = new Date();
  //   for (let i = 1; i <= n; i++) {}
  //   let end = new Date();
  //   return end.getSeconds() - start.getSeconds();

  let start = performance.now();
  for (let i = 1; i <= n; i++) {}
  let end = performance.now();
  return end - start;
}

console.log(calculateTime(100), "Sum from 1-100 Seconds");
console.log(calculateTime(100000), "Sum from 1-100000");
console.log(calculateTime(1000000000), "Sum from 1-1000000000");
console.log(calculateTime(10000000000), "Sum from 1-10000000000");
