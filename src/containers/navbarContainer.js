// dependencies
import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// user files
import NavBar from './navbar'
import Footprint from './footprint'

class NavBarContainer extends Component {

  // NOTE: this function formats a user's first name to be title case
  formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  render(){
    // NOTE: if a user is not logged in then they will see a different navbar
    if(!this.props.loggedIn){
      return (
        <Menu inverted size='massive' fixed='top' fluid widths={3} style={{height: '95px'}}>
          <Menu.Item>
            <Grid divided='horizontally' centered>
              <Grid.Row columns={2}>
                <Grid.Column width={16} textAlign='center'  >
                  <h3 style={{color: 'white', 'fontFamily':'Montserrat'}}>The Average Person's Carbon Footprint</h3>
                </Grid.Column>
                <Grid.Column width={16} textAlign='center' >
                  <Footprint />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Menu.Item>
          <Menu.Item>
            <Link to='/' style={{color: 'white', 'fontFamily':'Montserrat'}}>
              <h1 style={{'fontSize': '50px', 'fontFamily':'Montserrat'}}>di<span style={{color: 'red'}}>(e)</span>carbon</h1>
            </Link>
          </Menu.Item>
          <Menu.Item >
            <NavBar />
          </Menu.Item>
        </Menu>
      )
    }

    return(
      <Menu inverted size='massive' fixed='top' widths={3} style={{height: '95px'}}>
        <Menu.Item>
          <Grid divided='horizontally' centered>
            <Grid.Row columns={2}>
              <Grid.Column width={16} textAlign='center'  >
                <h3 style={{color: 'white', 'fontFamily':'Montserrat'}}>{this.formatName(this.props.user.name)}'s Current Carbon Footprint</h3>
              </Grid.Column>
              <Grid.Column width={16} textAlign='center' >
                <Footprint />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Menu.Item>
        <Menu.Item>
          <Link to='/' style={{color: 'white'}}>
            <h1 style={{'font-size': '50px', 'fontFamily':'Montserrat'}}>di<span style={{color: 'red'}}>(e)</span>carbon</h1>
          </Link>
        </Menu.Item>
        <Menu.Item >
          <NavBar />
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.user,
  loggedIn: user.loggedIn
})

export default connect(mapStateToProps)(NavBarContainer);
