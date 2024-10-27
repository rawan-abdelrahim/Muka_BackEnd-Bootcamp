// create a Book Object

const book = {
	title: "The Great Gatsby",
	author: "F. Scott Fitzgerald",
	yearPublished: 1925,

	describe() {
		return `${this.title} by ${this.author}, published in ${this.yearPublished}`.;
	}
};

const logBookDetails = (bookObject) => {
	for (let property in bookObject){
		if (bookObject.hasOwnProperty(property)){
			console.log(`${property}: ${bookObject[property]}`);
		}
	}
};

console.log("Book Details:");
logBookDetails(book);
console.log(book.describe());

const booksArray = [
    {
        title: "The Trial",
        author: "Franz Kafka",
        yearPublished: 1925
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        yearPublished: 1866
    },
    {
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        yearPublished: 1880
    },
    {
        title: "The Metamorphosis",
        author: "Franz Kafka",
        yearPublished: 1915
    },
    {
        title: "1984",
        author: "George Orwell",
        yearPublished: 1949
    }
];

console.log("\nArray of Books:");
console.log(booksArray);


const findBookByTitle = (title, books) => {
	const foundBook = books.find(book => book.title === title);
	return foundBook ? foundBook : "Book not found.";
};

const bookToFind = "1984";
const foundBook = findBookByTitle(bookToFind, booksArray);
console.log(`\nFound Book:`);
console.log(foundBook);
