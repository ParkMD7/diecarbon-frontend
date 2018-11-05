// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

// user files
import { fetchGoals } from '../actions/fetchGoals';


class GoalListContainer extends Component {

  componentDidMount() {
    this.props.fetchGoals()
  }

  renderGoals(){
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
            <Button color='black' fluid>
              <Icon name='add' />
              Commit to This Goal
            </Button>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    console.log('%c GoalListContainer Props: ', 'color: green', this.props.goals);
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

function mapStateToProps(state){
  return { goals: state.goals }
}

export default withRouter(connect(mapStateToProps, { fetchGoals })(GoalListContainer));
