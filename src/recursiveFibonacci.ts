function recursiveFibonacci(num: number): number {
  if (num < 2) return num;
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

console.log(recursiveFibonacci(7));
