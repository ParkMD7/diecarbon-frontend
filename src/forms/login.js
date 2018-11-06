// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Container, Header, Input, Button, Segment, Message, Form } from 'semantic-ui-react';

// user files
import { loginUser } from '../actions/loginUser'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e, semanticInputData) => {
    // semanticInputData.name -> 'username'
    this.setState({ [semanticInputData.name]: semanticInputData.value })
  }

  handleLoginSubmit = () => { //semantic forms preventDefault for you
    this.props.loginUser(this.state.username, this.state.password) //comes from mapDispatchToProps
    this.setState({ username: '', password: '' }) //reset form to initial state
  }

  render() {
    console.log('%c PROPS IN LOGINFORM ', 'color: goldenrod', this.props)
    return this.props.loggedIn ? ( <Redirect to="/profile" /> ) : (
      <Segment>
        <Form
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >
          <Message error header={this.props.failedLogin ? this.props.error : null} />
          <Form.Group widths="equal">
            <Form.Input
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Segment>
    );
  }

}


const mapStateToProps = ({ user: { authenticatingUser, failedLogin, error, loggedIn } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
})

export default withRouter(connect(mapStateToProps, { loginUser })(Login))
