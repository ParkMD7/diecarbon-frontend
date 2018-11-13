// change to make this display the fetchedUserGoals

// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Container, Header, Card, Button, Confirm, Image, Grid, Statistic, Icon } from 'semantic-ui-react';

// user files
import { fetchUserGoals } from '../actions/fetchUserGoals';
import withAuth from '../hocs/withAuth';
import ImpactSummary from '../components/impactsummary';
import EmailFootprintModal from '../components/emailFootprintModal';


class Profile extends Component {

  formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  calculateTotalCarbonReduced = () => {
    let totalCarbonReduced = this.props.goals.reduce((sum, goal) => sum + goal.footprint, 0)
    return totalCarbonReduced
  }

  // handleUncommitFromGoal = (goal) => {
  //   const userID = this.props.user.id.toString()
  //   this.props.unCommitToGoal(userID, goal)
  // }


background = require('../images/background.jpg')
sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    backgroundImage: 'url(' + this.background + ')'
};


  componentWillMount() {
    // debugger
    const userID = this.props.id.toString()
    this.props.fetchUserGoals(userID)
  }

  renderCommittedGoals(){
    // since I turned the fetched API into an object in reducers/goalsReducer I am now using lodash to map over that object
    return _.map(this.props.goals, goal => {
      // return this.props.userCommittedGoals.map( goal => {

      return (
        <Card textalign='center' height='150px' width='100px' key={goal.id}>
          <Link to={`/goals/${goal.id}`}>
            <Card.Header><h3>{goal.title}</h3></Card.Header>
            <Card.Content >
              <Image src='https://images-na.ssl-images-amazon.com/images/I/41Nxm91N6WL.jpg' alt="oh no!" height='75px' width='75px'/>
              <Card.Meta>Difficulty: {goal.difficulty}</Card.Meta>
              <Card.Description>CO2 Reduction: {goal.footprint}</Card.Description>
            </Card.Content>
          </Link>
          <Card.Content extra>
            <Button color='red' fluid onClick={() => this.handleUncommitFromGoal(goal)}>
              <Icon name='minus' />
              Uncommit From This Goal
            </Button>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    // debugger
    // console.log('%c Profile Props: ', 'color: firebrick', this.background);
    return(
      <div style={ this.sectionStyle }>
        <br /><br /><br /><br /><br /><br />
        <Grid divided='vertically' centered>
          <Grid.Row columns={3} centered>
            <Grid.Column width={5} textAlign='center' floated='right'>
              <Statistic color='green'>
                <Statistic.Value>
                  <Icon name='recycle' />
                  {this.calculateTotalCarbonReduced()}
                </Statistic.Value>
                <Statistic.Label>Carbon Reduced (lbs/yr)</Statistic.Label>
              </Statistic>
            </Grid.Column>

            <Grid.Column width={5} textAlign='center'>
              <h1>{this.formatName(this.props.name)}'s Profile</h1>
              <EmailFootprintModal userInfo={this.props.name} userGoals={this.props.goals} userID={this.props.id}/>
            </Grid.Column>

            <Grid.Column width={5} textAlign='center' floated='left'>
              <Statistic color='yellow'>
                <Statistic.Value>
                  <Icon name='trophy' />
                  {this.props.goals.length}
                </Statistic.Value>
                <Statistic.Label>Goals Committed</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2} centered>
            <Grid.Column width={8} textAlign='center'>
              <h2>{this.formatName(this.props.name)}'s Profile</h2>
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
              <h2>Carbon Emission Impact Summary</h2>
              <ImpactSummary />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <h2>{this.formatName(this.props.name)}'s Goals</h2>
            <Grid.Column width={16}>
              <Card.Group itemsPerRow={4} className="ui container center aligned" >
                {this.renderCommittedGoals()}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}



const mapStateToProps = ({ user: { user: { name, username, location, picture, goals, id, email } } }, { user: userCommittedGoals }) => ({
  name,
  username,
  location,
  picture,
  id,
  email,
  goals,
  userCommittedGoals
})

export default withAuth(connect(mapStateToProps, { fetchUserGoals })(Profile))
