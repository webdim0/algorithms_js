export const quickSort = (arr, log=false) => {    
    if (arr.length > 2) {
        const pivotIndex = Math.floor(arr.length/2);
        const pivotValue = arr[pivotIndex];               
        const left = [];
        const right = [];
        for (let i = 0; i < arr.length; i++) {
            if (i != pivotIndex) {
                if (arr[i] < pivotValue) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }            
        }
        if (log) {
            console.log(left, pivotValue, right);        
        }        
        return [...quickSort(left, log), pivotValue, ...quickSort(right, log)];        
    } else if (arr.length == 2) {
        return arr[0] <= arr[1] ? arr : [arr[1], arr[0]];
    } else {
        return arr;
    }    
}