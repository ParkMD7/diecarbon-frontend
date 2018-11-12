// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Grid, Card, Button, Message, Form } from 'semantic-ui-react';

// user files
import { loginUser } from '../actions/loginUser'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  background = require('../images/background.jpg')
  sectionStyle = {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'noRepeat',
      backgroundImage: 'url(' + this.background + ')'
  };

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
    return this.props.loggedIn ? ( <Redirect to="/" /> ) : (
      <div style={ this.sectionStyle }>
        <br /><br /><br /><br /><br /><br />
        <Grid>
          <Grid.Column width={16} textAlign='center' >
            <Card centered textalign='center' style={{height: '350px', width: '500px', 'background-color': 'lightslategrey', opacity:'0.8'}} >
              <Card.Content centered='true' textalign='center'>
                <Card.Header><h2 style={{color: 'red'}}>log in</h2></Card.Header>
                <br />
                <Form size="mini" key="mini" onSubmit={this.handleLoginSubmit} loading={this.props.authenticatingUser} error={this.props.failedLogin} >
                  <Message error header={this.props.failedLogin ? this.props.error : null} />
                  <Form.Input label="username" placeholder="username" name="username" onChange={this.handleChange} value={this.state.username} />
                  <Form.Input type="password" label="password" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password} />
                  <Button basic color='blue' type='submit' style={{height: '35px', width: '150px'}}>Log In</Button>
                  <h4>create a new account</h4>
                  <Button basic color='blue' style={{height: '35px', width: '150px'}} onClick={event => event.preventDefault()}>
                    <Link to='/signup'>Sign Up</Link>
                  </Button>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
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
