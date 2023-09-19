function recursiveFactorial(num: number): number {
  if (num < 2) return num;
  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));
