function insertionSort(arr: number[]) {
  if (arr.length < 2) return arr;
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    sorted.push(arr[i]);
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < sorted[j]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
}
insertionSort([-6, 20, 8, -8, 2]);
