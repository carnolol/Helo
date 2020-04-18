import React from 'react';
import './App.css'
import Nav from './components/Nav/Nav'
import { withRouter } from 'react-router-dom'
import routes from './routes'

// AUTH - handles the Login & Register of a new user
// DASHBOARD - will hold all posts, use .get to get all posts from db
//POST - 



function App(props) {
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
