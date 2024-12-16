// Let's calculate Fibonacci numbers. We'll use memorization.
// In order to avoid repeating work we've already done.
function fibonacci(n, memo = []) {
  // If n is 0 or 1, we already know the answer
  if (n === 0) return 0;
  if (n === 1) return 1;
 // Is the number already calculated?
  if (memo[n] !== undefined) {
    return memo[n]; // No need to calculate again, in order to return the result
  }
 // Store the result in 'memo' so we don't do it again
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
// Let's see the first 10 Fibonacci numbers
console.log("Here are the first 10 Fibonacci numbers:");
for (let i = 0; i < 10; i++) {
  console.log(`fib(${i}) = ${fibonacci(i)}`);
}
  
