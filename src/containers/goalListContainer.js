// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

// user files
import { fetchGoals } from '../actions/fetchGoals'


class GoalListContainer extends Component {
  // constructor(props){
  //   super(props)
  //
  //   this.state = {
  //     goalWasClicked: false,
  //   }
  // }



  componentDidMount() {
    this.props.fetchGoals()
  }

  // handleShowGoal = (goalID) => {
  //   debugger
  //   // console.log('clicked');
  //   const clickedGoal = this.props.goals.find( goal => {
  //     return goal.id === goalID
  //   })
  // }

  renderGoals(){
    // since I turned the fetched API into an object in reducers/goalsReducer I am now using lodash to map over that object
    return _.map(this.props.goals, goal => {
      return (
        <Card textalign='center' height='150px' width='100px' key={goal.id}>
          <Card.Header><h3>{goal.title}</h3></Card.Header>
          {/* <Card.Content onClick={this.handleShowGoal}> */}
          <Card.Content >
            <Link to='/goals/:id'>
              <Image src='https://images-na.ssl-images-amazon.com/images/I/41Nxm91N6WL.jpg' alt="oh no!" height='75px' width='75px'/>
              <Card.Meta>Difficulty: {goal.difficulty}</Card.Meta>
              <Card.Description>CO2 Reduction: {goal.footprint}</Card.Description>
            </Link>
          </Card.Content>
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
    // return (
    //   if(this.state.goalWasClicked = false){
        return (
          <div className="ui container center aligned">
            <h1>Goals To Reduce Your Carbon Footprint</h1>
            <Card.Group itemsPerRow={2} className="ui container center aligned" style={{overflowY: 'scroll', height: '600px'}}>
              {this.renderGoals()}
            </Card.Group>
          </div>
        );
    //   }
    // )
  }

}

function mapStateToProps(state){
  return { goals: state.goals }
}

export default connect(mapStateToProps, { fetchGoals })(GoalListContainer);
