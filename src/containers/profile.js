// UPDATE -- use " " for all JSX and ' ' for non-JSX

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
        <Card textalign='center' height='175px' width='100px' style={{'background-color': 'black', opacity:'0.75', 'fontFamily':'Montserrat'}} key={goal.id}>
          <Link to={`/goals/${goal.id}`}>
            <h3 style={{color:'white', 'fontFamily':'Montserrat'}}>{goal.title}</h3>
            <Card.Content >
              <br />
              <Icon name={this.determineIcon(goal)} size='huge' color='grey'/>
              <br /><br />
              {goal.difficulty==='Easy' ?
                <Card.Meta style={{color:'white'}}>Difficulty: <span style={{color: 'lightgreen'}}>{goal.difficulty}</span></Card.Meta>
              :
              <Card.Meta style={{color:'white'}}>Difficulty: <span style={{color: 'red'}}>{goal.difficulty}</span></Card.Meta>
              }
              <Card.Description style={{color:'white'}}>CO2 Reduction: <span style={{color: 'red'}}>{goal.footprint}</span></Card.Description>
            </Card.Content>
          </Link>
          <Card.Content extra>
            <Button color='red' style={{'fontFamily':'Raleway'}} fluid onClick={() => this.handleUnCommitFromGoal(goal)}>
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
        <br /><br /><br /><br /><br /><br /><br />
        <Grid divided='vertically' centered>
          <Grid.Row columns={1} centered>
            <Grid.Column width={10} textAlign='center'>
              {this.props.userCommittedGoals.length === 0 ?
                <Button width='1000px' size='huge' color='red'><span style={{fontFamily:"Montserrat"}}>Add Goals So You Can Email Your <span style={{color: 'black'}}>Carbon Footprint</span> Reduction Summary to Your Rep</span></Button>
              :
              <EmailFootprintModal userInfo={this.props.user.name} userGoals={this.props.userCommittedGoals} userID={this.props.user.id}/>
              }
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2} centered>
            <Grid.Column width={16} textAlign='center'>
              <Statistic color='yellow'>
                <Statistic.Value style={{'fontFamily':'Montserrat'}}>
                  <Icon name='trophy' />
                  {this.props.userCommittedGoals.length}
                </Statistic.Value>
                <Statistic.Label style={{'fontFamily':'Raleway'}}>Goals Committed</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column width={16} textAlign='center'>
              <Statistic color='green'>
                <Statistic.Value style={{'fontFamily':'Montserrat'}}>
                  <Icon name='recycle' />
                  {this.calculateTotalCarbonReduced()}
                </Statistic.Value>
                <Statistic.Label style={{'fontFamily':'Raleway'}}>Carbon Reduced (lbs/yr)</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1} centered>
            <Grid.Column width={10} textAlign='center'>
              <h2 style={{backgroundColor: 'black', color:'white', 'fontFamily':'Montserrat'}}><span style={{color: 'red'}}>Carbon Emission</span> Impact Summary</h2>
              <ImpactSummary />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2} centered>
            <div style={{paddingLeft:'360px', paddingRight:'360px'}}>
              <h2 style={{backgroundColor: 'black', color:'white', 'fontFamily':'Montserrat'}}><span style={{color: 'red'}}>{this.formatName(this.props.user.name)}'s</span> Goals</h2>
            </div>
            <br /><br />
            <Grid.Column width={6} textAlign='center'>
              <Card centered height='auto' width='auto' style={{width:'400px', height:'525px', 'background-color': 'black'}} raised>
                <h2 style={{color:'white', 'fontFamily':'Montserrat'}}>{this.formatName(this.props.user.name)}'s Profile</h2>
                <br />
                <Image centered src={this.props.user.picture} alt="Loading Picture" style={{width:'300px', height:'250px'}}/>
                <Card.Content>
                  <Card.Meta style={{color:'white', 'fontFamily':'Raleway'}}>Location: {this.props.user.location}</Card.Meta>
                  <Card.Meta style={{color:'white', 'fontFamily':'Raleway'}}>Email: {this.props.user.email}</Card.Meta>
                  <br /><br />
                  <Button color='grey' fluid style={{'fontFamily':'Raleway'}}>
                    <Icon name='edit' />
                    Edit Profile
                  </Button>
                  <br />
                  <Button color='red' fluid style={{'fontFamily':'Raleway'}}>
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
