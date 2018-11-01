import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Header, Input, Button } from 'semantic-ui-react'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Container text textAlign='center'>
        <Header>di(e)carbon</Header>
        <form onSubmit={event => this.props.handleLogin(event, this.state)}>
          <Header>Log In</Header>
          <Input size='large' fluid name='username' value={this.state.username} type='text' placeholder="Username" onChange={this.handleChange} /><br/>
          <Input size='large' fluid name='password' value={this.state.password} type='password' placeholder="Password" onChange={this.handleChange} /><br/>
          <Button.Group fluid>
            <Button basic color='blue' type='submit'>Log In</Button>
            <Button basic color='blue' onClick={event => event.preventDefault()}>
              <Link to='/signup'>Sign Up</Link>
            </Button>
          </Button.Group>
        </form>
      </Container>
    );
  }

}

export default Login;
