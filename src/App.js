import React from 'react';
import './App.css'
import Nav from './components/Nav/Nav'
import { withRouter } from 'react-router-dom'
import routes from './routes'

// AUTH - handles the Login & Register of a new user
// DASHBOARD - will hold all posts, use .get to get all posts from db
//POST - 

// The Nav component should not render if the current view is the Auth view.

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {props.location.pathname ==='/' ? null : <Nav/>}
      {routes}
    </div>
  );
}

// const mapStateToProps = reduxState => reduxState

// export default connect(mapStateToProps, {})(App)

export default withRouter(App)
