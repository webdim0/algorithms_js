import {quickSort} from '../array/quickSort'

test('quickSort test', () => {
    const arr = [34, 12, 34, 56, 67, 92, 24, 45];
    expect(quickSort(arr)).toEqual(arr.sort());
});

test('quickSort empty test', () => {
    const arr = [];
    expect(quickSort(arr)).toEqual([]);
});

test('quickSort strings test', () => {
    const arr = ['d', 'd', 'a', 'f', 'q'];
    expect(quickSort(arr)).toEqual(arr.sort());
});