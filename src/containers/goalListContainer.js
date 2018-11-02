// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { Card, Icon, Image } from 'semantic-ui-react'

// user files
import { fetchGoals } from '../actions/fetchGoals'


class GoalListContainer extends Component {

  componentDidMount() {
    this.props.fetchGoals()
  }

  renderGoals(){
    // since I turned the fetched API into an object in reducers/goalsReducer I am now using lodash to map over that object
    return _.map(this.props.goals, goal => {
      return (
        <Card fluid textalign='center' height='200px' width='150px' key={goal.id}>
          <Card.Header>{goal.title}</Card.Header>
          {/* <Link> */}
          <Card.Content>
            <Image src='https://images-na.ssl-images-amazon.com/images/I/41Nxm91N6WL.jpg' alt="oh no!" height='100px' width='100px'/>
            <Card.Meta>Difficulty: {goal.difficulty}</Card.Meta>
            <Card.Description>CO2 Reduction: {goal.footprint}</Card.Description>
          </Card.Content>
          {/* </Link> */}
          <Card.Content extra>
            <button>
              <Icon name='add' />
              Commit to This Goal
            </button>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    console.log('logging the goal props', this.props.goals);
    return (
      <div>
        <h1>Goals</h1>
          {this.renderGoals()}
      </div>
    );
  }

}

function mapStateToProps(state){
  return { goals: state.goals }
}

export default connect(mapStateToProps, { fetchGoals })(GoalListContainer);
