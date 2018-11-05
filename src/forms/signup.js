import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Header, Input, Button, Label, Form, Card } from 'semantic-ui-react'

class SignUp extends Component {
    constructor(props){
      super(props)
      if(props.user){
        this.state = {
          name: props.user.name,
          email: props.user.email,
          picture: props.user.picture,
          location: props.user.location,
          password: '',
          preFilled: true
        }
      } else {
        this.state = {
          name: '',
          age: '',
          username: '',
          email: '',
          password: '',
          location: '',
          picture: '',
          footprint: 40000,
          preFilled: false
        }
      }
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    render(){
      console.log(this.props);
      const { name, email, picture, location, age, username, password, preFilled } = this.state
      const { handleSignup, handleLinkClick } = this.props
      let originalName
      if(preFilled){
        originalName = this.props.user.name
      }
      return(
        <Card centered>
          <Card.Content>
            <Form onSubmit={event => handleSignup(event, this.state)}>
              {
                preFilled ?
                  <Header>Edit {originalName}</Header> :
                  <Header>Sign Up</Header> }
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
              {
                this.props.user ?
                  <Button fluid color='green' basic>Edit</Button> :
                  <div>
                    <Button fluid>Sign Up</Button>
                    <div onClick={handleLinkClick}>
                      <h3>Already have an account? Login</h3>
                    </div>
                  </div>
              }
            </Form>
          </Card.Content>
        </Card>
      )
    }
  }

  export default SignUp;
