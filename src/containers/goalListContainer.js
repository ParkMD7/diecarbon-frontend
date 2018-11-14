// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

// user files
import { fetchGoals } from '../actions/fetchGoals';
import { commitToGoal, unCommitFromGoal } from '../actions/commitOrUncommitToGoal';
import SearchBar from '../components/searchbar';
import GoalCheckboxFilter from './goalCheckboxFilter';


class GoalListContainer extends Component {
  state = {
    term: '',
    input: ''
  }

  componentDidMount() {
    this.props.fetchGoals()
  }

  handleCommitToGoal = (goal) => {
    const userID = this.props.user.id.toString()
    this.props.commitToGoal(userID, goal)
  }

  handleUnCommitFromGoal = (goal) => {
    const userID = this.props.user.id.toString()
    this.props.unCommitFromGoal(userID, goal)
  }

  handleSortBySearchFilter = (userSearchTerm) => {
    this.setState({
      term: userSearchTerm
    })
  }

  // handleSortByDifficultyInput = (difficulty) => {
  //   this.setState({
  //     input: difficulty
  //   }, ()=> console.log(this.state.input));
  // };

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

  renderGoals(){
    // since I turned the fetched API into an object in reducers/goalsReducer I am now using lodash to map over that object
    return _.map(this.props.goals, goal => {
      // conditionally render based on user's search input & filter
      if(goal.difficulty === this.state.input && goal.title.toLowerCase().includes(this.state.term) || goal.category.toLowerCase().includes(this.state.term)){

      // conditionally render button for goals - if the user's goals contains a mapped goal then render the uncommit button (render commit button if not)
      let usersAlreadyCommittedToGoal = this.props.userCommittedGoals.find( userGoal => {
        return userGoal.id === goal.id
        })

      return (
        <Card textalign='center' height='175px' width='100px' style={{'background-color': 'black', opacity:'0.75'}} key={goal.id}>
          <Link to={`/goals/${goal.id}`}>
            <Card.Header style={{color:'white'}}><h3>{goal.title}</h3></Card.Header>
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
            {!usersAlreadyCommittedToGoal ?
              <Button color='white' fluid onClick={() => this.handleCommitToGoal(goal)}>
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
      )
      }
    })
  }

  render() {
    console.log('%c GoalListContainer Props: ', 'color: green', this.props.goals, this.props.user);
        return (
            <div className="ui container center aligned">
              <h1 style={{color: 'white'}}>Goals To Reduce Your <span style={{color: 'red'}}>Carbon Footprint </span></h1>
              <br/>
              <Grid divided='vertically' centered>
                {/* <Grid.Row columns={1} centered>
                  <Grid.Column width={16} textAlign='center' stretched verticalAlign='middle'>
                    <GoalCheckboxFilter filterInput={this.handleSortByDifficultyInput}/>
                  </Grid.Column>
                </Grid.Row> */}

                <Grid.Row columns={1} centered>
                  <Grid.Column width={16} textAlign='center' stretched verticalAlign='middle'>
                    <h4 style={{color: 'white'}}>Filter Goals By Title or Category</h4>
                    <SearchBar search={this.handleSortBySearchFilter}/>
                  </Grid.Column>
                </Grid.Row>

              </Grid>
              <br/>
              <Card.Group itemsPerRow={3} className="ui container center aligned" >
                {this.renderGoals()}
              </Card.Group>
            </div>
        );
  }

}

const mapStateToProps = (state) => ({
  goals: state.goals,
  user: state.user.user,
  userCommittedGoals: state.user.userCommittedGoals
})

export default withRouter(connect(mapStateToProps, { fetchGoals, commitToGoal, unCommitFromGoal })(GoalListContainer));
