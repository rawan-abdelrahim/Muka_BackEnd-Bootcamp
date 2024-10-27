function findMAX(arr)
{
	let max = 0;

	for (let i = 1; i < arr.length; i++)
	{
		if (arr[i] > max)
		{
			max = arr[i];
		
		}
	}

	return max;
}

const numbers = [1, 6, 4, 9, 7];

console.log(findMAX(numbers));
