// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Container, Header, Card, Button, Confirm, Image, Grid, Statistic, Icon } from 'semantic-ui-react';

// user files
import { unCommitFromGoal } from '../actions/commitOrUncommitToGoal';
import withAuth from '../hocs/withAuth';
import ImpactSummary from '../components/impactsummary';
import EmailFootprintModal from '../components/emailFootprintModal';


class Profile extends Component {

  formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  calculateTotalCarbonReduced = () => {
    let totalCarbonReduced = this.props.userCommittedGoals.reduce((sum, goal) => sum + goal.footprint, 0)
    return totalCarbonReduced
  }

  handleUnCommitFromGoal = (goal) => {
    const userID = this.props.user.id.toString()
    this.props.unCommitFromGoal(userID, goal)
    this.setState({
      wasClicked: false
    })
  }

  determineIcon = (goal) => {
    switch(goal.category){

      case "Home":
        return "home"

      case "Travel":
        return "plane"

      case "Food":
        return "food"

      case "Goods":
        return "shopping bag"

      case "Outdoors":
        return "bug"
    }
  }


background = require('../images/background.jpg')
sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    backgroundImage: 'url(' + this.background + ')'
};

  renderCommittedGoals = () => {
    return this.props.userCommittedGoals.map( goal => {
      return (
        <Card textalign='center' height='150px' width='100px' style={{'background-color': 'lightgrey', opacity:'0.85'}} key={goal.id}>
          <Link to={`/goals/${goal.id}`}>
            <Card.Header style={{color:'black'}}><h3>{goal.title}</h3></Card.Header>
            <Card.Content >
              <br />
              <Icon name={this.determineIcon(goal)} size='huge' color='black'/>
              <br /><br />
              {goal.difficulty==='Easy' ?
                <Card.Meta style={{color:'black'}}>Difficulty: <span style={{color: 'green'}}>{goal.difficulty}</span></Card.Meta>
              :
              <Card.Meta style={{color:'black'}}>Difficulty: <span style={{color: 'red'}}>{goal.difficulty}</span></Card.Meta>
              }
              <Card.Description style={{color:'black'}}>CO2 Reduction: <span style={{color: 'red'}}>{goal.footprint}</span></Card.Description>
            </Card.Content>
          </Link>
          <Card.Content extra>
            <Button color='red' fluid onClick={() => this.handleUnCommitFromGoal(goal)}>
              <Icon name='minus' />
              Uncommit From This Goal
            </Button>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    console.log('%c Profile Props: ', 'color: pink', this.props);
    return(
      <div style={ this.sectionStyle }>
        <br /><br /><br /><br /><br /><br />
        <Grid divided='vertically' centered>
          <Grid.Row columns={1} centered>
            <Grid.Column width={16} textAlign='center'>
              <EmailFootprintModal userInfo={this.props.user.name} userGoals={this.props.userCommittedGoals} userID={this.props.user.id}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2} centered>
            <Grid.Column width={16} textAlign='center'>
              <Statistic color='yellow'>
                <Statistic.Value>
                  <Icon name='trophy' />
                  {this.props.userCommittedGoals.length}
                </Statistic.Value>
                <Statistic.Label>Goals Committed</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column width={16} textAlign='center'>
              <Statistic color='green'>
                <Statistic.Value>
                  <Icon name='recycle' />
                  {this.calculateTotalCarbonReduced()}
                </Statistic.Value>
                <Statistic.Label>Carbon Reduced (lbs/yr)</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1} centered>
            <Grid.Column width={10} textAlign='center'>
              <h2>Carbon Emission Impact Summary</h2>
              <ImpactSummary />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2} centered>
            <h2>{this.formatName(this.props.user.name)}'s Goals</h2>
            <Grid.Column width={6} textAlign='center'>
              <Card centered style={{'background-color': 'lightgrey', opacity:'1'}}>
                <Card.Header><h2>{this.formatName(this.props.user.username)}</h2></Card.Header>
                <Image src={"https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_2.jpg"} />
                <Card.Content>
                  <Card.Meta>Location: {this.props.user.location}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button color='black' fluid>
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
            <Grid.Column width={10}>
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


const mapStateToProps = (state) => ({
  goals: state.goals,
  user: state.user.user,
  userCommittedGoals: state.user.userCommittedGoals
})

export default withAuth(connect(mapStateToProps, { unCommitFromGoal })(Profile))
