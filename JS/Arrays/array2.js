const arr = [1, 2, 3, 4, 5];

const addNumber = (arr, num) => {
	arr.push(num);
	console.log(`${num} added. current array:`, arr);
};

const removeNumber = (arr) => {
	const removedNum = arr.pop();
	console.log(`${removedNum} removed. current array:`, arr);
};

addNumber(arr, 7);
addNumber(arr, 9);

removeNumber(arr);
removeNumber(arr);
