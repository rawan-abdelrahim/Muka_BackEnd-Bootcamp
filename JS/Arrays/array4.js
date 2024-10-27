const numbers = [];

for (let i = 1; i <= 20; i++)
{
	numbers.push(i);
}

const getEvenNumbers = (arr) => {
	return arr.filter(num => num % 2 === 0);
};

const evenNumbers = getEvenNumbers(numbers);

console.log(evenNumbers);
