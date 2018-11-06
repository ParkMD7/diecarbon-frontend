// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

// user files
import Login from './login'
import SignUp from './signup'
import { ROOT_URL } from '../constants'
import { loginOrSignup } from '../actions/currentUser'

class FormContainer extends Component {
  state = {
    isLoginForm: true
  }

  handleFormSwitch = () => {
    this.setState({
      isLoginForm: !this.state.isLoginForm
    })
  }

  handleLogin = (event, formData) => {
    fetch(`${ROOT_URL}/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(user => {
      if(user.errors){
        // handle errors
      } else {
        this.props.loginOrSignup(user)
      }
    })
  }

  handleSignup = (event, formData) => {
    fetch(`${ROOT_URL}/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: formData
      })
    })
    .then(res => res.json())
    .then(user => {
      if(user.errors){
        // handle errors
      } else {
        this.props.loginOrSignup(user)
      }
    })
  }

  render() {
    return (
      <Grid container columns={3}>
        <Grid.Row centered stretched verticalAlign='middle' style={{ marginTop: '15%'}}>
          {
            this.state.isLoginForm ?
              <Login handleLinkClick={this.handleFormSwitch} handleLogin={this.handleLogin} /> :
              <SignUp handleLinkClick={this.handleFormSwitch} handleSignup={this.handleSignup} />
          }
        </Grid.Row>
      </Grid>
    );
  }

}

export default connect(null, { loginOrSignup })(FormContainer);
