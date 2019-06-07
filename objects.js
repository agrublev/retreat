const ob1 = { test: 52 };

const ob2 = {
	...ob1,
	other: 52
};
console.warn(ob1,ob2);

// OLD WAY TO CLONE
const ob4 = Object.assign({}, ob1);
// NEW WAY CLONE
const ob3 = { ...ob1 };

console.warn(ob4,ob3);
