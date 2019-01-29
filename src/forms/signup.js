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
            <Card centered textalign='center' style={{height: 'auto', width: '700px', 'background-color': 'black', opacity:'0.75'}}>
              <Card.Content>
                <Form size="large" key="large" onSubmit={this.handleSignup} loading={this.props.authenticatingUser} error={this.props.failedLogin} >
                  <h1 style={{color: 'white', 'fontFamily':'Montserrat'}}>Sign Up And Start Making an <span style={{color:'red'}}>Impact</span></h1>
                  <br />
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

                  <Button inverted color='red' type='submit' style={{height: '35px', width: '150px'}}>Sign Up</Button>
                  <h3 style={{color: 'white', 'fontFamily':'Raleway'}}>Already Have An Account?</h3>
                  <Button inverted color='red' style={{height: '35px', width: '150px'}} onClick={event => event.preventDefault()}>
                    <Link to='/login' style={{color: '#DD6A64'}}>Log In</Link>
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
