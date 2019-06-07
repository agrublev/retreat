const arr1 = [1, 2, 3, 4, 5];
// Loop with a temporary i variable
for (let i = 0; i < arr1; i++) {
    arr1[i] = arr1[i] + 1;
}

// for in
for (let i in arr1) {
	arr1[i] = arr1[i] + 1;
}

// forEach
arr1.forEach((currentItemInArray, indexNumberOfItem) => {
    arr1[indexNumberOfItem] = currentItemInArray + 1;
});

// map
arr1 = arr1.map(currentItemInArray => {
	return currentItemInArray + 1;
});

