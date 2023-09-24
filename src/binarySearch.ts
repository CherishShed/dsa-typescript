function binarySearch(
  arr: number[],
  search: number,
  high: number,
  low: number
) {
  if (low === high) return -1;
  let mid: number = Math.floor((low + high) / 2);
  if (arr[mid] === search) {
    return mid;
  }
  if (arr[mid] > search) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
  return binarySearch(arr, search, high, low);
}
const myArray = [1, 2, 3, 7, 8, 9];
console.log(binarySearch(myArray, 4, myArray.length - 1, 0));
