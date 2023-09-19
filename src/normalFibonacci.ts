function fibbonaci(num: number): number[] {
  const fib: number[] = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log(fibbonaci(8));
