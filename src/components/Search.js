import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {search} from '../BooksAPI'
import Book from './Book'


class Search extends Component {
    state = {
        showLegend : ''
    }

    handleSearch = async event =>{
        const query = event.target.value;
        if(query!==''){
        const result = await search(query)
        const error = result.error;
        if (error) {
          this.setState(() => ({
            showLegend: "No results found",
          }));
        }else{
            this.props.searchBook(result);  
            this.setState(() => ({
                showLegend: '',
              }));
        }
    }
            
    }


    
    

    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to={'/'} className="close-search" >Close</Link>

                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" onChange={this.handleSearch}/>

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">

                        {this.state.showLegend !== ''? (<div>{this.state.showLegend}</div>) : this.props.searchBooks.map((book) =>{
                            const bookindex = this.props.books.findIndex((b) => b.id === book.id);
                            const shelfOfBook = bookindex > -1 ? this.props.books[bookindex].shelf : "none";
                            return (
                                <Book key={book.id} {...book} moveBook={this.props.moveBook} search={shelfOfBook}/>
                            );
                        })}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;