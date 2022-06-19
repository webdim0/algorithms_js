export const binarySearch = (value, arr, start=null, end=null, log=false) => {        
    if (end - start > 1 || (!start && !end)) {        
        let pivotIndex = start || end ? Math.floor(start + (end - start)/2) : Math.floor(arr.length/2);
        let pivotValue = arr[pivotIndex];
        let startIndex = 0;
        let stopIndex = 0;        
        while (true) {                
            if (pivotValue == value) {
                return pivotIndex;
            }                        
            startIndex = pivotValue > value ? startIndex : pivotIndex;
            stopIndex = pivotValue > value ? pivotIndex : (stopIndex ? stopIndex : arr.length);                
            if (log) {                            
                console.log(arr.slice(startIndex, stopIndex));
            }
            if (stopIndex - startIndex <= 1) {
                return arr[startIndex] == value ? startIndex : null;
            }            
            pivotIndex = Math.floor(startIndex + (stopIndex - startIndex)/2);
            pivotValue = arr[pivotIndex];            
        }         
    } else if (end - start == 1) {
        return arr[start] == value ? start : null;
    } else {
        return null;
    }    
}