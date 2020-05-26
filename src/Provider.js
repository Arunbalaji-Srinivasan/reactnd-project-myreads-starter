import React, { Component } from "react";
export const MyContext = React.createContext();

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      searchBooks : [],
      addBook: (books) => {
        const currentlyReading = books.filter(
          (book) => book.shelf === "currentlyReading"
        );
        const read = books.filter((book) => book.shelf === "read");
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        this.setState({ books, currentlyReading, read, wantToRead });
      },
      moveBook: (book, newShelf, allShelfs) => {
        if (Object.keys(allShelfs).includes(newShelf)) {
          const newBooks = this.state.books.map((allBooks) => {
            const foundBookID = allShelfs[newShelf].find(
              (bookID) => bookID === allBooks.id
            );
            if (foundBookID) {
              allBooks.shelf = newShelf;
            }
            return allBooks;
          });
          this.state.addBook(newBooks);
        } else {
          const newBooks = this.state.books.filter((allBooks) => book.id!==allBooks.id);
          this.state.addBook(newBooks);
        }
      },
      searchBook :(result)=>{
        this.setState({searchBooks : result})
      }
    };
  }
  render() {
    return (
      <div>
        <MyContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </MyContext.Provider>
      </div>
    );
  }
}

export default Provider;
