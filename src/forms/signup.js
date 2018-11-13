// dependencies
import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Input, Button, Label, Form, Card, Grid } from 'semantic-ui-react';

// user files
import { signUpUser } from '../actions/loginUser'

class SignUp extends Component {
  state = {
    name: '',
    age: '',
    username: '',
    email: '',
    password: '',
    location: '',
    picture: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignup = (event) => {
    this.props.signUpUser(this.state.name, this.state.age, this.state.username, this.state.email, this.state.password, this.state.location, this.state.picture)
    this.setState({
      name: '',
      age: '',
      username: '',
      email: '',
      password: '',
      location: '',
      picture: ''
    })
  }


  background = require('../images/background.jpg')
  sectionStyle = {
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      position: 'relative',
      backgroundRepeat: 'noRepeat',
      backgroundImage: 'url(' + this.background + ')'
  };

  render(){
    console.log('%c PROPS IN LOGINFORM ', 'color: goldenrod', this.props)
    const { name, age, username, email, password, location, picture } = this.state
    const { handleSignup, handleLinkClick } = this.props

    return this.props.loggedIn ? ( <Redirect to="/" /> ) : (
      <div style={ this.sectionStyle }>
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <Grid>
          <Grid.Column width={16} textAlign='center' >
            <Card centered textalign='center' style={{height: 'auto', width: '500px', 'background-color': 'white', opacity:'0.9'}}>
              <Card.Content>
                <Form size="mini" key="mini" onSubmit={this.handleSignup} loading={this.props.authenticatingUser} error={this.props.failedLogin} >
                  <Header><h2 style={{color: 'red'}}>sign up</h2></Header>
                  <Form.Field>
                    <Input
                      placeholder='Name'
                      name='name'
                      value={name}
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Age'
                      name='age'
                      value={age}
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Username'
                      name='username'
                      value={username}
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Email'
                      name='email'
                      value={email}
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Password'
                      name='password'
                      value={password}
                      type='password'
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Location'
                      name='location'
                      value={location}
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Profile Picture URL'
                      name='picture'
                      value={picture}
                      onChange={this.handleChange} />
                  </Form.Field>

                  <Button basic color='blue' type='submit' style={{height: '35px', width: '150px'}}>Sign Up</Button>
                  <h4>already have an account?</h4>
                  <Button basic color='blue' style={{height: '35px', width: '150px'}} onClick={event => event.preventDefault()}>
                    <Link to='/login'>Log In</Link>
                  </Button>

                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}

const mapStateToProps = ({ user: { authenticatingUser, failedLogin, error, loggedIn } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
})

export default withRouter(connect(mapStateToProps, { signUpUser })(SignUp))
