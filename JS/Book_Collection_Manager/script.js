let books = JSON.parse(localStorage.getItem('books')) || [];
let currentBookIndex = null;

function addBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('authorName').value;
  const year = document.getElementById('publicationYear').value;
  const genre = document.getElementById('genre').value;

  if (title && author && year && genre) {
    const newBook = { title, author, year, genre };
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    document.getElementById('bookForm').reset();
    printBook();
  }
}

function printBook(filterBooks = books) {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '<h2>Book List</h2>';

  filterBooks.forEach((book, idx) => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-list-item');

    const bookDetails = document.createElement('span');
    bookDetails.textContent = `${book.title} by ${book.author} (${book.year}, ${book.genre})`;

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editBook(idx));

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteBook(idx));

    bookItem.appendChild(bookDetails);
    bookItem.appendChild(editBtn);
    bookItem.appendChild(deleteBtn);
    bookList.appendChild(bookItem);
  });
}

function editBook(idx) {
  const book = books[idx];
  document.getElementById('bookTitle').value = book.title;
  document.getElementById('authorName').value = book.author;
  document.getElementById('publicationYear').value = book.year;
  document.getElementById('genre').value = book.genre;

  currentBookIndex = idx;

  const addButton = document.getElementById('addButton');
  addButton.textContent = 'Update Book';
  addButton.removeEventListener('click', addButton);
  addButton.addEventListener('click', updateBook);
}

function updateBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('authorName').value;
  const year = document.getElementById('publicationYear').value;
  const genre = document.getElementById('genre').value;

  if (title && author && year && genre && currentBookIndex !== null) {
    books[currentBookIndex] = { title, author, year, genre };
    printBook();
    localStorage.setItem('books', JSON.stringify(books));
    document.getElementById('bookForm').reset();

    const addButton = document.getElementById('addButton');
    addButton.textContent = 'Add Book';
    addButton.removeEventListener('click', updateBook);
    addButton.addEventListener('click', addBook);

    currentBookIndex = null;
  }
}

function deleteBook(idx) {
  books.splice(idx, 1);
  localStorage.setItem('books', JSON.stringify(books));
  printBook();
}

function sortBooks(tmp) {
  books.sort((a, b) =>
    tmp === 'title' ? a.title.localeCompare(b.title) : a.year - b.year
  );
  printBook();
}

function filterBooksByGenre() {
  const genre = document.getElementById('filterGenre').value;

  printBook(
    genre === 'All' ? books : books.filter((book) => book.genre === genre)
  );
}

document.getElementById('addButton').addEventListener('click', addBook);
document.getElementById('sortTitle').addEventListener('click', () => sortBooks('title'));
document.getElementById('sortYear').addEventListener('click', () => sortBooks('year'));
document.getElementById('filterGenre').addEventListener('change', filterBooksByGenre);

printBook();
