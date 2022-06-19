import {buildList, reverseList, toArray} from '../reverseList';

test('reverseList test', () => {
    const arr = [12, 24, 34, 34, 45, 56, 67, 92];

    const list = buildList(...arr);    
    const revList = reverseList(list);
    
    expect(toArray(revList)).toEqual(arr.reverse());
});