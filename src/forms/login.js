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
    return this.props.loggedIn ? ( <Redirect to="/" /> ) : (
      <div style={ this.sectionStyle }>
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <Grid>
          <Grid.Column width={16} textAlign='center' >
            <Card centered textalign='center' style={{height: 'auto', width: '700px', 'background-color': 'black', opacity:'0.75'}} >
              <Card.Content centered='true' textalign='center' >
                <h1 style={{color: 'white', 'fontFamily':'Montserrat'}}>Log In And Start Making an <span style={{color:'red'}}>Impact</span></h1>
                <br /><br />
                <Form size="large" key="large" onSubmit={this.handleLoginSubmit} loading={this.props.authenticatingUser} error={this.props.failedLogin} >
                  <Message error header={this.props.failedLogin ? this.props.error : null} />
                  <Form.Input placeholder="username" name="username" onChange={this.handleChange} value={this.state.username} />
                  <br />
                  <Form.Input type="password" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password} />
                  <Button inverted color='red' type='submit' style={{height: '35px', width: '150px', 'text-color': 'white'}}>Log In</Button>
                  <br /><br />
                  <h3 style={{color: 'white', 'fontFamily':'Raleway'}}>Don't Already Have An Account?</h3>
                  <Button inverted color='red' style={{height: '35px', width: '150px'}} onClick={event => event.preventDefault()}>
                    <Link to='/signup' style={{color: '#DD6A64'}}>Sign Up</Link>
                  </Button>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
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
