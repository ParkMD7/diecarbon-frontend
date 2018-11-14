// dependencies
import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// user files
import NavBar from './navbar'
import Footprint from './footprint'

class NavBarContainer extends Component {

  formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }


  render(){
    if(!this.props.loggedIn){
      return (
        <Menu inverted size='massive' fixed='top' fluid widths={3} style={{height: '75px'}}>
          <Menu.Item>
            <Grid divided='horizontally' centered>
              <Grid.Row columns={2}>
                <Grid.Column width={16} textAlign='center'  >
                  <h3 style={{color: 'white'}}>The Average Person's Carbon Footprint</h3>
                </Grid.Column>
                <Grid.Column width={16} textAlign='center' >
                  <Footprint />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Menu.Item>
          <Menu.Item>
            <Link to='/' style={{color: 'white'}}>
              <h1 style={{'font-size': '50px'}}>di<span style={{color: 'red'}}>(e)</span>carbon</h1>
            </Link>
          </Menu.Item>
          <Menu.Item >
            <NavBar />
          </Menu.Item>
        </Menu>
      )
    }

    return(
      <Menu inverted size='massive' fixed='top' widths={3} style={{height: '75px'}}>
        <Menu.Item>
          <Grid divided='horizontally' centered>
            <Grid.Row columns={2}>
              <Grid.Column width={16} textAlign='center'  >
                <h3 style={{color: 'white'}}>{this.formatName(this.props.user.name)}'s Current Carbon Footprint</h3>
              </Grid.Column>
              <Grid.Column width={16} textAlign='center' >
                <Footprint />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Menu.Item>
        <Menu.Item>
          <Link to='/' style={{color: 'white'}}>
            <h1 style={{'font-size': '50px'}}>di<span style={{color: 'red'}}>(e)</span>carbon</h1>
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
