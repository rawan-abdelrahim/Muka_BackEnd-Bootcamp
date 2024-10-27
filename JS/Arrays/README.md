# JavaScript Arrays

## Array Methods
JavaScript provides a variety of built-in array methods that allow you to manipulate and traverse arrays efficiently. Some commonly used array methods include:

- **`push()`**: Adds one or more elements to the end of an array.
  
  ```javascript
  const fruits = ["apple", "banana"];
  fruits.push("orange");
  console.log(fruits); // Output: ["apple", "banana", "orange"]
  ```
- **`pop()`**: Removes the last element from an array.
  
  ```javascript
  const fruits = ["apple", "banana", "orange"];
  fruits.pop();
  console.log(fruits); // Output: ["apple", "banana"]
  ```
- **`forEach()`**: Executes a provided function once for each array element.
  
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach((num) => {
      console.log(num);
  });
  // Output: 1 2 3 4 5 (each on a new line)
  ```
- **`map()`**:Creates a new array with the results of calling a provided function on every element.
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const squares = numbers.map((num) => num * num);
  console.log(squares); // Output: [1, 4, 9, 16, 25]
  ```
- **`filter()`**: Creates a new array with all elements that pass the test implemented by the provided function.
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]
  ```
## Other Array Methods

In addition to the commonly used methods mentioned earlier, JavaScript arrays offer several other useful methods for manipulating and interacting with array data. Here are some of them:

- **`shift()`**: Removes the first element from an array and returns that element. This method changes the length of the array.

  ```javascript
  const fruits = ["apple", "banana", "orange"];
  const firstFruit = fruits.shift();
  console.log(firstFruit); // Output: "apple"
  console.log(fruits);     // Output: ["banana", "orange"]
  ```
- **`unshift()`**: Adds one or more elements to the beginning of an array and returns the new length of the array. This method modifies the original array.

  ```javascript
  const fruits = ["banana", "orange"];
  const newLength = fruits.unshift("apple");

  console.log(newLength); // Output: 3
  console.log(fruits);    // Output: ["apple", "banana", "orange"]
  ```
- **`slice()`**: Returns a shallow copy of a portion of an array into a new array, selected from start to end (end not included). The original array is not modified.

  ```javascript
  const fruits = ["apple", "banana", "orange", "mango"];
  const citrus = fruits.slice(1, 3);

  console.log(citrus); // Output: ["banana", "orange"]
  ```
- **`splice()`**:Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.

  ```javascript
  const fruits = ["apple", "banana", "orange"];
  const removedFruits = fruits.splice(1, 1, "mango");

  console.log(removedFruits); // Output: ["banana"]
  console.log(fruits);        // Output: ["apple", "mango", "orange"]
  ```
- **`concat()`** : Merges two or more arrays and returns a new array without modifying the original arrays.

  ```javascript
  const fruits1 = ["apple", "banana"];
  const fruits2 = ["orange", "mango"];
  const allFruits = fruits1.concat(fruits2);

  console.log(allFruits); // Output: ["apple", "banana", "orange", "mango"]
  ```
- **`join()`** : Joins all elements of an array into a string, with a specified separator (comma by default).

  ```javascript
  const fruits = ["apple", "banana", "orange"];
  const fruitString = fruits.join(", ");

  console.log(fruitString); // Output: "apple, banana, orange"
  ```
- **`includes()`**: Determines whether an array includes a certain value among its entries, returning `true` or `false`.

  ```javascript
  const fruits = ["apple", "banana", "orange"];
  const hasBanana = fruits.includes("banana");

  console.log(hasBanana); // Output: true
  ```
- **`find()`** :Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns `undefined`.

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const found = numbers.find((num) => num > 3);

  console.log(found); // Output: 4
  ```
## Manipulating and Traversing Arrays
- **Manipulating Arrays**: Use methods like `push()`, `pop()`, `shift()`, `unshift()`, and `splice()` to add, remove, or modify elements in an array.

- **Traversing Arrays**: Methods like `forEach()`, `map()`, and `filter()` allow you to loop over array elements and perform operations, such as transforming or filtering the data.
