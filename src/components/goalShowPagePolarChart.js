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

  componentDidMount() {
    this.props.fetchGoals()
  }

  totalCategoryCarbon = () => {
    let footprintArray = []

    return _.map(this.props.goals, goal => {
      if(goal.category === this.props.goal.category){
        // debugger
        return footprintArray.push(goal.footprint)
      }
      let finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
      return finalCalc
    })
  }

  averageCategoryCarbon = () => {
    let footprintArray = []

    return _.map(this.props.goals, goal => {
      if(goal.category === this.props.goal.category){
        // debugger
        return footprintArray.push(goal.footprint)
      }
      let finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
      return (finalCalc / footprintArray.length)
    })
  }

  data = {
    labels: [`${this.props.goal.category} Total`,`${this.props.goal.category} Average`, `${this.props.goal.title}`],
    datasets: [{
        label: "Goal's Carbon Reduced (lbs/yr)",
        backgroundColor: ['#36a2eb', '#cc65fe','#ffce56'],
        data: [this.totalCategoryCarbon(), this.averageCategoryCarbon(), `${this.props.goal.footprint}`]
      }],
    borderColor: 'white'
  }
  options = {
    title: {
      display: true,
      text: 'Carbon Reduced By Goal Category',
      fontColor: 'white'
    },
    legend: {
            labels: {
                fontColor: "white"
                // fontSize: 18
            }
        },
    animation: {
      animateScale: true
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

const mapStateToProps = (state, ownProps) => ({
  goal: state.goals[ownProps.match.params.id],
  goals: state.goals
})

export default withRouter(connect(mapStateToProps, { fetchGoal, fetchGoals })(GoalPolarChart))
