import React from 'react';
import './App.css'
import Nav from './components/Nav/Nav'
import Auth from './components/Auth'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import routes from './routes'

// AUTH - handles the Login & Register of a new user
// DASHBOARD - will hold all posts, use .get to get all posts from db
//POST - 

// The Nav component should not render if the current view is the Auth view.

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {props.isLoggedIn ? <Nav/> : null}
      {/* <Link to={props}>
        <Nav />
      </Link> */}
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {})(App)

// export default App
