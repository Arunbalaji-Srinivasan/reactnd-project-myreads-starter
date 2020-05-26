import React, { Component } from 'react'
import {update} from '../BooksAPI'

class Book extends Component {
    handleChange = async event =>{
        const bookShelf = event.target.value;
        const book = this.props;
        const result = await update(book, bookShelf)
        this.props.moveBook(book,bookShelf,result);
           
    }
    render() {
        const shelf = this.props.search ? this.props.search : this.props.shelf
        return (
            <div>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{
                                width: 128, height: 193,
                                backgroundImage:  this.props.imageLinks ? `url(${this.props.imageLinks.thumbnail})` : 'none'   
                            }}></div>
                            <div className="book-shelf-changer">
                                <select onChange={this.handleChange} value={shelf}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{this.props.title}</div>
                        <div className="book-authors">{this.props.authors}</div>
                    </div>
                </li>
            </div>
        )
    }
}
export default Book;