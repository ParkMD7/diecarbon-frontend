// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

// user files
import { fetchGoals } from '../actions/fetchGoals';


class GoalListContainer extends Component {
  state = {
    goalIsCommitted: false
  }

  componentDidMount() {
    this.props.fetchGoals()
  }

  handleCommitToGoal = (goal) => {
    fetch(`http://localhost:3000/api/v1/goals/${goal.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.props.user.id
      })
    })
    this.setState({
      goalIsCommitted: true
    })
    console.log('click', goal);
  }

  renderGoals(){
    // if(this.props.goals.users.includes(this.props.user)){
    //
    // }
    // since I turned the fetched API into an object in reducers/goalsReducer I am now using lodash to map over that object
    return _.map(this.props.goals, goal => {
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
            <Button color='black' fluid onClick={() => this.handleCommitToGoal(goal)}>
              <Icon name='add' />
              Commit to This Goal
            </Button>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    console.log('%c GoalListContainer Props: ', 'color: green', this.props.goals, this.props.user);
        return (
          <div className="ui container center aligned">
            <h1>Goals To Reduce Your Carbon Footprint</h1>
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

export default withRouter(connect(mapStateToProps, { fetchGoals })(GoalListContainer));
