import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Header, Input, Button, Label } from 'semantic-ui-react'

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

  render() {
    return (
      <Container text textAlign='center'>
        <Header>di(e)carbon</Header>
        <form onSubmit={event => this.props.handleSubmit(event, this.state)}>
          <Header>Sign Up</Header>

          <Container textAlign='left'>
            <Label>Name *</Label>
            <Input size='large' fluid name='name' value={this.state.name} type='text' placeholder="Name" onChange={this.handleChange} />
          </Container>

          <Container textAlign='left'>
            <Label>Age *</Label>
            <Input size='large' fluid name='name' value={this.state.age} type='text' placeholder="Name" onChange={this.handleChange} />
          </Container>

          <Container textAlign='left'>
            <Label>Username *</Label>
            <Input size='large' fluid name='username' value={this.state.username} type='text' placeholder="Username" onChange={this.handleChange} />
          </Container>

          <Container textAlign='left'>
            <Label>Email *</Label>
            <Input size='large' fluid name='email' value={this.state.email} type='text' placeholder="Email" onChange={this.handleChange} />
          </Container>

          <Container textAlign='left'>
            <Label>Password (6 characters minimum)</Label>
            <Input size='large' fluid name='password' value={this.state.password} type='password' placeholder="Password" onChange={this.handleChange} /><br/><br/>
          </Container>

          <Container textAlign='left'>
            <Label>Home Location *</Label>
            <Input size='large' fluid name='location' value={this.state.location} type='text' placeholder="Location" onChange={this.handleChange} />
          </Container>

          <Container textAlign='left'>
            <Label>Profile Picture *</Label>
            <Input size='large' fluid name='location' value={this.state.picture} type='text' placeholder="Location" onChange={this.handleChange} />
          </Container>


          <Button.Group fluid>
            <Button basic color='blue' type='submit'>Sign Up</Button>
            <Button basic color='blue'>
              <Link to='/login'>Log In</Link>
            </Button>
          </Button.Group>
        </form>
      </Container>
    );
  }

}

export default SignUp;
