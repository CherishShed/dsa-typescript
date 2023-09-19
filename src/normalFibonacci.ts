function fibbonaci(num: number) {
  const fib: number[] = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  console.log(fib);
}

fibbonaci(8);
