// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

// user files
import { fetchGoal } from '../actions/fetchGoal';
import { commitToGoal, unCommitFromGoal } from '../actions/commitOrUncommitToGoal';
import GoalPolarChart from './goalShowPagePolarChart';


class GoalShowPage extends Component {

  componentDidMount() {
    const goalID = this.props.match.params.id // this params object will contain all wildcard tokens in our url route -> I am pulling off the id
    this.props.fetchGoal(goalID);
  }

  background = require('../images/background.jpg')
  sectionStyle = {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'noRepeat',
      backgroundImage: 'url(' + this.background + ')'
  };

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
    }
  }

  handleCommitToGoal = (goal) => {
    const userID = this.props.user.id.toString()
    this.props.commitToGoal(userID, goal)
    this.setState({
      wasClicked: true
    })
  }

  handleUnCommitFromGoal = (goal) => {
    const userID = this.props.user.id.toString()
    this.props.unCommitFromGoal(userID, goal)
    this.setState({
      wasClicked: false
    })
  }

  render(){
    // console.log('%c GoalShow Props: ', 'color: yellow', this.props);
    const { goal } = this.props;
    let usersAlreadyCommittedToGoal = this.props.userCommittedGoals.find( userGoal => {
      return userGoal.id === goal.id
      })

    if(!goal){
      return(
        <div>
          <br />
          Loading...
          <br /><br />
          <Link to='/'>
            <Button size='massive' negative>Back To Goals</Button>
          </Link>
        </div>
      )
    }

    return (
      <div style={ this.sectionStyle }>
        <div className="ui container center aligned" >
          <br /><br /><br /><br /><br /><br />
          <Grid divided='vertically' centered style={{border:'none'}}>
            <Grid.Row columns={2} centered>
              <Grid.Column width={8} textAlign='center'>
                <br />
                <Link to='/'>
                  <Button size='massive' color='black' style={{fontFamily:'Montserrat'}}>Back To Main Goal Page List</Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
            <br /><br /><br /><br /><br /><br />
            <Grid.Row columns={2} centered>
              <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
                <h2 style={{backgroundColor: 'black', color:'white', 'fontFamily':'Montserrat'}}>Goal Number <span style={{color: 'red'}}>#{goal.id}'s</span> Information Page</h2>
              </div>
              <br /><br />
              <Grid.Column width={6} textAlign='center' centered>
                <h2 style={{backgroundColor: 'black', color:'white', 'fontFamily':'Montserrat', paddingLeft:'50px', paddingRight:'50px'}}>Goal Card</h2>
                <Card centered textalign='center' height='750px' width='650px' style={{'backgroundColor': 'black', opacity:'0.75'}} key={goal.id}>
                  <Link to={`/goals/${goal.id}`}>
                    <Card.Header style={{color:'white'}}><h3>{goal.title}</h3></Card.Header>
                    <Card.Content >
                      <br />
                      <Icon name={this.determineIcon(goal)} size='massive' color='grey'/>
                      <br /><br />
                      {goal.difficulty==='Easy' ?
                        <Card.Meta style={{color:'white'}}>Difficulty: <span style={{color: 'lightgreen'}}> {goal.difficulty}</span></Card.Meta>
                      :
                      <Card.Meta style={{color:'white'}}>Difficulty: <span style={{color: 'red'}}> {goal.difficulty}</span></Card.Meta>
                      }
                      <br />
                      <Card.Meta style={{color:'white'}}>{goal.description}</Card.Meta>
                      <br />
                      <Card.Description style={{color:'white'}}>CO2 Reduction: <span style={{color: 'red'}}>{goal.footprint}</span></Card.Description>
                    </Card.Content>
                  </Link>
                  <Card.Content extra>
                    {!usersAlreadyCommittedToGoal ?
                      <Button color='grey' fluid onClick={() => this.handleCommitToGoal(goal)}>
                        <Icon name='add' />
                        Commit to This Goal
                      </Button>
                    :
                    <Button color='red' fluid onClick={() => this.handleUnCommitFromGoal(goal)}>
                      <Icon name='minus' />
                      Uncommit From This Goal
                    </Button>
                    }
                  </Card.Content>
                </Card>

              </Grid.Column>
              <Grid.Column width={10} textAlign='center'>
                <h2 style={{backgroundColor: 'black', color:'white', 'fontFamily':'Montserrat'}}>Goal's Relative <span style={{color: 'red'}}>Carbon Impact</span></h2>
                <GoalPolarChart goalInfo={this.props.goal}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br />
        </div>
      </div>
      );
    }
}


const mapStateToProps = ({ goals, user }, ownProps) => ({
  // this GoalShowPage component will now only recieve the 1 that a user clicks on
  goal: goals[ownProps.match.params.id],
  user: user.user,
  userCommittedGoals: user.userCommittedGoals,
  goals: goals
})

export default withRouter(connect(mapStateToProps, { fetchGoal, commitToGoal, unCommitFromGoal })(GoalShowPage));
