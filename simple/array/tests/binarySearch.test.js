import {binarySearch} from '../binarySearch'

test('binarySearch test', () => {
    const arr = [12, 24, 34, 34, 45, 56, 67, 92];
    expect(binarySearch(56, arr)).toBe(5);
});

test('binarySearch empty test', () => {
    const arr = [];
    expect(binarySearch(33, arr)).toBe(null);
});

test('binarySearch not found test', () => {
    const arr = [12, 24, 34, 34, 45, 56, 67, 92];
    expect(binarySearch(33, arr)).toBe(null);
});

test('binarySearch in range test', () => {
    const arr = [12, 24, 34, 34, 45, 56, 67, 92];
    expect(binarySearch(34, arr, 0, 2)).toBe(2);
});