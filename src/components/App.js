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


class App extends Component {

  render() {
    // console.log('%c APP Props: ', 'color: firebrick', this.props);
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
              <Route exact path='/login' render={ () => <Login /> } />
            </Switch>
          </div>
    );
  }
}


export default withRouter(App);
// withRouter is a Higher Order Component (HOC) that returns a COPY of App with React router props injected
