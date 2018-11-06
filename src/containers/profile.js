// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Card, Button, Confirm, Image } from 'semantic-ui-react';

// user files
import withAuth from '../hocs/withAuth';


class Profile extends Component {

  render() {
    console.log('%c Profile Props: ', 'color: firebrick', this.props);
    return(
      <Card>
        {/* <Image src={picture} /> */}
        <Image src={"https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_2.jpg"} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>

          <Card.Description>Current Footprint: {this.props.footprint}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}


const mapStateToProps = ({ user: { user: { name, username, location, picture, footprint, goals } } }) => ({
  name,
  username,
  location,
  picture,
  footprint,
  goals
})

export default withAuth(connect(mapStateToProps)(Profile))
