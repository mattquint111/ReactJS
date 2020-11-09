import React, { Component } from 'react'
import './App.css';
import Nav from './Nav'
import Featured from './Featured'
import Article from './Article'

class App extends Component {
  render() {

    let articleOne = {
      title: 'Hello WatchKit',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: 12,
      likes: 124    
    }

    let articleTwo = {
      title: 'Introduction to Swift',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: 15,
      likes: 45  
    }

    return (
      <div className='mainCont'>

        <Nav />

        <div className="bodyCont">
          <Featured />

          <Article articleOne = {articleOne} articleTwo = {articleTwo} />
        </div>
        


      </div>
    )
  }
}

export default App;
