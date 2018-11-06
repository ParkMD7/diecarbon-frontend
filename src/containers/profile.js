// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Card, Button, Confirm, Image, Grid, Statistic, Icon } from 'semantic-ui-react';

// user files
import withAuth from '../hocs/withAuth';
import ImpactSummary from '../components/impactsummary';


class Profile extends Component {

  formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  render() {
    console.log('%c Profile Props: ', 'color: firebrick', this.props);
    return(
      <Grid divided='vertically' centered>
        <Grid.Row columns={2} centered>
          <Grid.Column width={8} textAlign='center'>
            <h2>{this.formatName(this.props.name)}'s Profile</h2>
            <Statistic.Group widths='two'>
              <Statistic>
                <Statistic.Value>{this.props.goals.length}</Statistic.Value>
                <Statistic.Label>Goals Committed</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>
                  <Icon name='recycle' />
                  {this.props.goals.length}
                </Statistic.Value>
                <Statistic.Label>Carbon Reduced</Statistic.Label>
              </Statistic>
            </Statistic.Group>
            <br/><br/>

            <Card centered>
              <Card.Header><h2>{this.formatName(this.props.username)}</h2></Card.Header>
              <Image src={"https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_2.jpg"} />
              <Card.Content>
                <Card.Meta>Location: {this.props.location}</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Button color='blue' fluid>
                  <Icon name='edit' />
                  Edit Profile
                </Button>
                <Button color='red' fluid>
                  <Icon name='delete' />
                  Delete Profile
                </Button>
              </Card.Content>
            </Card>


          </Grid.Column>
          <Grid.Column width={8} textAlign='center'>
            <ImpactSummary />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <h2>{this.formatName(this.props.name)}'s Goals</h2>
        </Grid.Row>
      </Grid>

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
