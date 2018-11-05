// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';

// user files
import { fetchGoal } from '../actions/fetchGoal';


class GoalShowPage extends Component {

  componentDidMount() {

    // const { goalID } = this.props.match.params // this params object will contain all wildcard tokens in our url route -> I am pulling off the id
    const { goalID } = this.props // this params object will contain all wildcard tokens in our url route -> I am pulling off the id
    this.props.fetchGoal(goalID);
  }

  render(){
    console.log(this.props);
    const { goal } = this.props;

    if(!goal){
      return(
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div>
        <h1>goal.title</h1>
      </div>
    );
  }
}

function mapStateToProps({ goals }, ownProps){
  // debugger
  // this GoalShowPage component will now only recieve the 1 that a user clicks on
  // return { goal: goals[ownProps.match.params.id] };
  return { goal: goals };
}

export default connect(mapStateToProps, { fetchGoal })(GoalShowPage);
