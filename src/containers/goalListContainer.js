// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

// user files
import { fetchGoals } from '../actions/fetchGoals';
import { fetchUserGoals } from '../actions/fetchUserGoals';
import { commitToGoal, unCommitFromGoal } from '../actions/commitOrUncommitToGoal';
import SearchBar from '../components/searchbar';
import GoalCheckboxFilter from './goalCheckboxFilter';


class GoalListContainer extends Component {
  state = {
    term: '',
    input: '',
    wasClicked: false
  }

  componentWillMount() {
    // const userID = this.props.user.id.toString()
    // this.props.fetchUserGoals(userID)
    // i need to pass the userID to fetch
    this.props.fetchGoals()
  }

  handleCommitToGoal = (goal) => {
    const userID = this.props.user.id.toString()
    this.props.commitToGoal(userID, goal)
    this.setState({
      wasClicked: true
    })
  }

  handleChangeButton = () => {

  }

  handleUnCommitFromGoal = (goal) => {
    const userID = this.props.user.id.toString()
    this.props.unCommitFromGoal(userID, goal)
    this.setState({
      wasClicked: false
    })
  }

  handleSortBySearchFilter = (userSearchTerm) => {
    this.setState({
      term: userSearchTerm
    })
  }

  handleSortByDifficultyInput = (difficulty) => {
    this.setState({
      input: difficulty
    }, ()=> console.log(this.state.input));
  };

  renderGoals(){
    // since I turned the fetched API into an object in reducers/goalsReducer I am now using lodash to map over that object
    return _.map(this.props.goals, goal => {
      // conditionally render based on user's search input & filter
      if(goal.difficulty === this.state.input && goal.title.toLowerCase().includes(this.state.term) || goal.category.toLowerCase().includes(this.state.term)){

      // conditionally render button for goals - if the user's goals contains a mapped goal then render the uncommit button (render commit button if not)
      let usersAlreadyCommittedToGoal = this.props.user.goals.find( userGoal => {
        return userGoal.id === goal.id
        })

      // { wasClicked } = this.state
      return (
        <Card textalign='center' height='150px' width='100px' style={{'background-color': 'lightgrey', opacity:'0.8'}} key={goal.id}>
          <Link to={`/goals/${goal.id}`}>
            <Card.Header style={{color:'black'}}><h3>{goal.title}</h3></Card.Header>
            <Card.Content >
              <Image src='https://images-na.ssl-images-amazon.com/images/I/41Nxm91N6WL.jpg' alt="oh no!" height='75px' width='75px'/>
              {goal.difficulty==='Easy' ?
                <Card.Meta style={{color:'black'}}>Difficulty: <span style={{color: 'green'}}>{goal.difficulty}</span></Card.Meta>
              :
              <Card.Meta style={{color:'black'}}>Difficulty: <span style={{color: 'red'}}>{goal.difficulty}</span></Card.Meta>
              }
              <Card.Description style={{color:'black'}}>CO2 Reduction: <span style={{color: 'red'}}>{goal.footprint}</span></Card.Description>
            </Card.Content>
          </Link>
          <Card.Content extra>
            {!usersAlreadyCommittedToGoal ?
              <Button color='black' active={this.state.wasClicked} fluid onClick={() => this.handleCommitToGoal(goal)}>
                <Icon name='add' />
                Commit to This Goal
              </Button>
            :
            <Button color='red' active={!this.state.wasClicked} fluid onClick={() => this.handleUnCommitFromGoal(goal)}>
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
              <h1>Goals To Reduce Your Carbon Footprint</h1>
              <br/>
              <Grid divided='vertically' centered>
                {/* <Grid.Row columns={1} centered>
                  <Grid.Column width={16} textAlign='center' stretched verticalAlign='middle'>
                    <GoalCheckboxFilter filterInput={this.handleSortByDifficultyInput}/>
                  </Grid.Column>
                </Grid.Row> */}

                <Grid.Row columns={1} centered>
                  <Grid.Column width={16} textAlign='center' stretched verticalAlign='middle'>
                    <h4>Filter Goals By Title or Category</h4>
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
  user: state.user.user
})

export default withRouter(connect(mapStateToProps, { fetchGoals, commitToGoal, unCommitFromGoal, fetchUserGoals })(GoalListContainer));
