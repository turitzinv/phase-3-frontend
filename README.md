# Personal Library - Frontend

Personal Library is an application that assists you in storing and organzing all of your books.  This is the frontend portion of the application.

# Video Demonstration of Application

https://youtu.be/c_32vuOd7hQ

# Running the frontend (http://localhost:3000)

```
git clone git@github.com:turitzinv/phase-3-sinatra-react-project.git
cd phase-3-sinatra-react-project
cd frontend
npm start
```

# Routes

There are three navigation routes for this application.

Home
- A homepage welcoming you to the Personal Library application.

Library List
- A new library genre can be submitted here, updating the genres that your library contains.
- You can use the dropdown to filter to see only a specific library genre and the books in the Book List table will filter to the selected genre.
- Book List is your entire collection of books, within this table you can check whether you have read the book, or delete a book entirely.

Create New Book
- This form allows you to add a new book to your collection.  Upon clicking submit, you will be navigated to the Library List route where your new book will be seen within the Book List table.

# Backend

This application utilizes Sinatra and Active Record to support the React frontend.