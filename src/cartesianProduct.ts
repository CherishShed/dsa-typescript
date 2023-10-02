function cartesianProduct(a: number[], b: number[]): number[][] {
  let cartArray: number[][] | any[] = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      cartArray.push([a[i], b[j]]);
    }
  }
  return cartArray;
}

console.log(cartesianProduct([1, 2], [3, 4, 5]));
