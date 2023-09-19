function factorial(num: number): number {
  let fact: number = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5));
