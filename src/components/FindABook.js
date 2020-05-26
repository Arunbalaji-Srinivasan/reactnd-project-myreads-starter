import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class FindABook extends Component {
    render() {
        return (
            <div>
                    <Link className="open-search" to={'/search'}>Add a Book</Link>
            </div>
        )
    }
}
export default FindABook;