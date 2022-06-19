import {buildList, printList, reverseList} from './reverseList.js';

console.log('*buildList');
let list = buildList(12, 24, 34, 34, 45, 56, 67, 92);
printList(list);
console.log('');
console.log('*reverseList');
list = reverseList(list);
printList(list);