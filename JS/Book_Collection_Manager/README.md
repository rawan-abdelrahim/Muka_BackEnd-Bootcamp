# Week 1 Final Project: Book Collection Manager

## Project Overview
The **Book Collection Manager** is a simple web application that enables users to manage a collection of books. Users can add, view, update, and delete books from their collection. The application uses JavaScript for functionality and relies on arrays and objects to store book data.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Development Steps](#development-steps)
- [Future Improvements](#future-improvements)

## Features
1. **User Interface**  
    - A simple HTML layout with input fields to capture book details (Title, Author, Year, Genre).
    - Buttons to add, view, update, and delete books.
    - A display area that shows the list of books.

2. **Functionality**
    - **Add Book**:  
        - Allows users to enter book details, create a new book object, and store it in an array.
        - Displays the updated book list.
    - **View Books**:  
        - Shows a list of books in a table or list format.
    - **Update Book**:  
        - Allows users to select and edit a book from the list.
        - Updates the book details in the array and refreshes the displayed list.
    - **Delete Book**:  
        - Allows users to delete a selected book from the list.
        - Removes the book from the array and updates the displayed list.

3. **Data Structure**  
    - The application stores books as objects in an array:
    ```javascript
    {
      title: "Book Title",
      author: "Author Name",
      year: 2021,
      genre: "Fiction"
    }
    ```

## Bonus Features
- **Sorting**: Sort books by title or year.
- **Filtering**: View books by specific genres.
- **Local Storage**: Store the book collection in local storage, so data persists between page refreshes.

## Technologies Used
- **HTML**: Structure of the web application.
- **CSS**: Basic styling to enhance user experience.
- **JavaScript**: Functional logic for adding, viewing, updating, and deleting books, as well as implementing sorting, filtering, and local storage.

## Setup and Installation
1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/book-collection-manager.git
    ```
2. Navigate to the project folder:
    ```bash
    cd book-collection-manager
    ```
3. Open `index.html` in your browser to view and interact with the application.

## Usage
1. Open the application in your browser.
2. Use the input fields to add book details, then click "Add" to add the book to your collection.
3. Click "View" to display the list of all books.
4. To update a book, select it from the list, edit its details, and click "Update."
5. To delete a book, select it from the list and click "Delete."

## Development Steps
1. **Setup HTML Structure**:
    - Create an HTML file with a form for adding book details and a display area for the book list.
2. **Style the Application**:
    - Use CSS for styling input fields, buttons, and the book display area.
3. **Implement JavaScript Logic**:
    - Write JavaScript functions to handle CRUD operations (Add, View, Update, Delete).
    - Use event listeners for button clicks and form submissions.
4. **Testing**:
    - Test each functionality thoroughly to ensure smooth user interaction.
5. **Deploy (Optional)**:
    - Optionally, deploy the application to GitHub Pages or another hosting service.

## Future Improvements
- Add advanced sorting and filtering options (e.g., multiple genre filters).
- Implement search functionality to find books by title or author.
- Enhance the user interface with additional styling and animations.


