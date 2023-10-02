function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  console.log(`the left is ${left} and the right is ${right}`);
  const sorted = merge(mergeSort(left), mergeSort(right));
  console.log(`the sorted one is ${sorted}`);
  return sorted;
}

function merge(left: number[], right: number[]): number[] {
  const sortedArray: number[] = [];
  console.log(
    `the left in merfe is ${left} and the right in merge  is ${right}`
  );
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift()!);
    } else {
      sortedArray.push(right.shift()!);
    }
  }
  console.log(`the sorted array is ${sortedArray}`);
  const newArray = [...sortedArray, ...left, ...right];
  console.log(`the returned array in merge function is ${newArray}`);
  return newArray;
}

console.log(mergeSort([-6, 3, -9, -1, 20, 1]));
