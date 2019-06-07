const arr1 = [1, 2, 3, 4, 5];

let arr2 = [];
arr1.forEach((currentItemInArray, indexNumberOfItem) => {
    // prettier-ignore
    console.warn(
    	"currentItemInArray", currentItemInArray,
	    "indexNumberOfItem", indexNumberOfItem
    );
    // change the item
    arr2[indexNumberOfItem] = currentItemInArray + 1;
});

console.warn(arr1, arr2);
