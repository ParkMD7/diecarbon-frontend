// dependencies
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// user files
// import '../style/App.css';
import MainPage from './mainPage';
import About from './about';
import NavBar from '../containers/navbar';
import Profile from '../containers/profile';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div>
            <NavBar />

            <Switch>
              <Route exact path="/" component={ () => <MainPage /> } />
              <Route exact path='/profile' component={ () => <Profile /> } />
              <Route exact path='/about' component={ () => <About /> } />
              {/* <Route exact path='/signup' render={ () => <SignUp handleSubmit={this.handleSubmit} /> } />
              <Route exact path='/login' render={ () => <Login handleLogin={this.handleLogin} /> } /> */}
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
