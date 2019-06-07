const arr1 = [{ name: "one" }, { name: "two" }];

let indexOfArrayObject = arr1.findIndex(
	obj => obj.name === "one"
);

let item = arr1[indexOfArrayObject];


