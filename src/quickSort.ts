function quickSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([-6, 3, -9, -1, 20, 1]));
