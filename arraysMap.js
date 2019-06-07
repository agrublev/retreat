const arr1 = [1, 2, 3, 4, 5];

// Loop AND change with map
// map DOES NOT change original, so assign to new
const arr2 = arr1.map((currentItemInArray, indexNumberOfItem) => {
    // prettier-ignore
    console.warn(
    	"currentItemInArray", currentItemInArray,
	    "indexNumberOfItem", indexNumberOfItem
    );
    // change the item
    currentItemInArray += 1;
    return currentItemInArray;
});

console.warn(arr1, arr2);
