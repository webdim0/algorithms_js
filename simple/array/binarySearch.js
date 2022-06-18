export const binarySearch = (value, arr, start=null, end=null, log=false) => {        
    if (end - start > 1 || (!start && !end)) {
        const pivotIndex = start || end ? Math.floor(start + (end - start)/2) : Math.floor(arr.length/2);
        const pivotValue = arr[pivotIndex];
        if (pivotValue == value) {
            return pivotIndex;
        } 
        const startIndex = pivotValue > value ? (start ? start : 0) : pivotIndex + 1;
        const stopIndex = pivotValue > value ? pivotIndex : (end ? end + 1 : arr.length);        
        if (log) {            
            console.log(arr.slice(startIndex, stopIndex));
        }
        for (let i = startIndex; i < stopIndex; i++) {
            if (arr[i] == pivotValue) {
                return i;
            }            
        }        
        return binarySearch(value, arr, startIndex, stopIndex, log);
    } else if (end - start == 1) {
        return arr[start] == value ? start : null;
    } else {
        return null;
    }    
}