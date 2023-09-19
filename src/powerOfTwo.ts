function power(num: number) {
  if (num < 2) return false;
  while (num > 1) {
    if (num % 2 !== 0) return false;
    num /= 2;
  }
  return true;
}
console.log(power(1));
