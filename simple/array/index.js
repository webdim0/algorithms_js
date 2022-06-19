import {quickSort} from './quickSort.js';
import {binarySearch} from './binarySearch.js';

const arr = [34, 12, 34, 56, 67, 92, 24, 45];

console.log('*quickSort');
console.log(arr);
console.log('---');
const res = quickSort(arr, true);
console.log('---');
console.log(res);

const arrSorted = res;
const serchValue = 67;
console.log('');
console.log('*binarySearch');
console.log(serchValue);
console.log(arrSorted);
console.log('---');
const searchIndex = binarySearch(serchValue, arrSorted, null, null, true);
// const searchIndex = binarySearch(34, arrSorted, 4, 5);
console.log('---');
console.log(searchIndex, arrSorted[searchIndex]);