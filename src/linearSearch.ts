function linearSearch(arr: any[], element: any) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return i;
  }
  return -1;
}

console.log(linearSearch([1, 4, 2, 3], 4));
