// this.props.goals is mapping incorrectly -> fix this and change the chart

// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash';
import { Polar } from 'react-chartjs-2';

// user files
import { fetchGoal } from '../actions/fetchGoal';
import { fetchGoals } from '../actions/fetchGoals';

class GoalPolarChart extends Component {


  thisGoalInfo = this.props.goalInfo

  totalCategoryCarbon = (thisGoalInfo) => {
    let footprintArray = []
    let finalCalc

    _.map(this.props.goals, goal => {
      if(goal.category === thisGoalInfo.category){
        return footprintArray.push(goal.footprint)
      }
      finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
      //debugger
    })
    // debugger
    return Math.abs(finalCalc)
    //debugger
  }

  averageCategoryCarbon = (thisGoalInfo) => {
    let footprintArray = []
    let finalCalc

    _.map(this.props.goals, goal => {
      if(goal.category === thisGoalInfo.category){
        return footprintArray.push(goal.footprint)
      }
      finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
    })
    // debugger
    return (Math.abs(finalCalc) / Math.abs(footprintArray.length))
  }

  data = {
    labels: [`${this.props.goalInfo.category} Total`,`${this.props.goalInfo.category} Average`, `${this.props.goalInfo.title}`],
    datasets: [{
        label: "Goal's Carbon Reduced (lbs/yr)",
        backgroundColor: ['#A21C48', '#E93323', '#F3961F'],
        data: [this.totalCategoryCarbon(this.props.goalInfo), this.averageCategoryCarbon(this.props.goalInfo), `${Math.abs(this.props.goalInfo.footprint)}`]
      }],
    borderColor: 'white'
  }
  options = {
    title: {
      display: true,
      text: 'Carbon Reduced By Goal Category',
      fontColor: 'white',
      fontFamily: 'Raleway',
      fontSize: 18
    },
    legend: {
      labels: {
          fontColor: "white",
          fontFamily: 'Raleway',
          fontSize: 14,
          padding: 5
      }
    },
    animation: {
      animateScale: true,
      duration: 2000,
      easing: 'easeOutElastic'
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    }
  }

  render(){
    // debugger
    console.log('%c Impact Props: ', 'color: purple', this.props);
    return(
      <div>
        <Polar data={this.data} options={this.options}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // goal: state.goals[ownProps.match.params.id],
  goals: state.goals
})

export default withRouter(connect(mapStateToProps)(GoalPolarChart))
