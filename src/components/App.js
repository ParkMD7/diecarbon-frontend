// dependencies
import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

// user files
import SignUp from '../forms/signup';
import Login from '../forms/login';
import MainPage from './mainPage';
import About from './about';
import NavBarContainer from '../containers/navbarContainer';
import Profile from '../containers/profile';
import GoalShowPage from './goalShowPage';
import { loginOrSignup } from '../actions/currentUser';

class App extends Component {

  // handleLogin = (event, value) => {
  //   event.preventDefault()
  //   fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(value)
  //   })
  //   .then( res => res.json())
  //   .then( currentUser => {
  //     if(currentUser.status === 'error'){
  //       const errors = currentUser.message
  //       alert(errors)
  //     } else {
  //       const user = {
  //         id: currentUser.user.id,
  //         username: currentUser.user.username,
  //         name: currentUser.user.name,
  //         age: currentUser.user.age,
  //         location: currentUser.user.location,
  //         picture: currentUser.user.picture,
  //         footprint: currentUser.user.footprint,
  //         goals: currentUser.user.goals
  //       }
  //       this.props.loginOrSignup(user)
  //       }
  //     })
  // }

  render() {
    console.log('%c APP Props: ', 'color: firebrick', this.props);
    return (
          <div>
            <NavBarContainer />
            <br /><br /><br /><br /><br /><br /><br />
            <Switch>
              <Route exact path="/" component={ () => <MainPage /> } />
              <Route exact path='/profile' component={ () => <Profile /> } />
              <Route exact path='/about' component={ () => <About /> } />
              <Route exact path='/goals/:id' component={ () => <GoalShowPage /> } />
              <Route exact path='/signup' component={ () => <SignUp /> } />
              <Route exact path='/login' render={ () => <Login handleLogin={this.handleLogin} /> } />
            </Switch>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, {loginOrSignup})(App));
