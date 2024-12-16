// Let's calculate Fibonacci numbers. We'll use memorization.
// In order to avoid repeating work we've already done.
function fibonacci(n, memo = []) {
  // If n is 0 or 1, we already know the answer
  if (n === 0) return 0;
  if (n === 1) return 1;

  
