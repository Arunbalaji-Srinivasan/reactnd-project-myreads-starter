import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Library from './components/Library'
import Search from './components/Search'
import Provider, { MyContext } from "./Provider"

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Provider>

          <Switch>
            <Route exact path='/' render={() =>
              <MyContext.Consumer>
               {context => <Library {...context} />}
              </MyContext.Consumer> }
              />
              <Route path='/search' render={() =>
                <MyContext.Consumer>
                 {context => <Search {...context} />}
                </MyContext.Consumer> }
                />
          </Switch>
        </Provider>

      </div>
    )
  }
}

export default BooksApp
