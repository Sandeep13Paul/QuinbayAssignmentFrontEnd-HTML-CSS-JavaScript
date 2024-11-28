function frankenSplice(arr1, arr2, n) {
    // Creating a shallow copy of arr2 to avoid mutating the original
    let newArray = arr2.slice();
    
    // Using the splice method to insert elements from arr1 into newArray
    newArray.splice(n, 0, ...arr1);
    
    return newArray;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);