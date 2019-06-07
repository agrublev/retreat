const arr1 = [1, 2, 3, 4, 5];

// Loop AND change based on conditions
// filter DOES NOT change original, so assign to new
const arr2 = arr1.filter((currentItemInArray, indexNumberOfItem) => {
    // prettier-ignore
    console.warn(
    	"currentItemInArray", currentItemInArray,
	    "indexNumberOfItem", indexNumberOfItem
    );

    // return IF TRUE
    return Math.random() > 0.62;
});

console.warn(arr1, arr2);

