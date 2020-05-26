import React, { Component } from 'react'
import BookShelf from './BookShelf'
import FindABook from './FindABook'
import { getAll } from '../BooksAPI'

class Landing extends Component {

    async componentDidMount() {
        const books = await getAll();
        this.props.addBook(books);
    }
    render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <BookShelf title='Currently Reading' books={this.props.currentlyReading} moveBook={this.props.moveBook} />
                        <BookShelf title='Want To Read' books={this.props.wantToRead} moveBook={this.props.moveBook}  />
                        <BookShelf title='Already Read' books={this.props.read} moveBook={this.props.moveBook} />
                    </div>
                    <FindABook />
                </div>
            </div>
        )
    }
}
export default Landing;