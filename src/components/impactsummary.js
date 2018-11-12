// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';

class ImpactSummary extends Component {

  homeCarbonData = () => {
    let footprintArray = []
    let addedGoal = this.props.goals.map(goal => {
      if(goal.category === 'Home'){
        return footprintArray.push(goal.footprint)
      }
    })
    let finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
    return finalCalc
  }

  travelCarbonData = () => {
    let footprintArray = []
    let addedGoal = this.props.goals.map(goal => {
      if(goal.category === 'Travel'){
        return footprintArray.push(goal.footprint)
      }
    })
    let finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
    return finalCalc
    }

  foodCarbonData = () => {
    let footprintArray = []
    let addedGoal = this.props.goals.map(goal => {
      if(goal.category === 'Food'){
        return footprintArray.push(goal.footprint)
      }
    })
    let finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
    return finalCalc
    }

  goodsCarbonData = () => {
    let footprintArray = []
    let addedGoal = this.props.goals.map(goal => {
      if(goal.category === 'Goods'){
        return footprintArray.push(goal.footprint)
      }
    })
    let finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
    return finalCalc
    }

  data = {
    labels: ['Home', 'Travel', 'Food', 'Goods'],
    datasets: [{
        label: "Carbon Reduced (lbs/yr)",
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe','#ffce56'],
        data: [this.homeCarbonData(), this.travelCarbonData(), this.foodCarbonData(), this.goodsCarbonData()]
      }]
  }
  options = {
    title: {
      display: true,
      text: 'Carbon Reduced By Goal Category'
    },
    animation: {
      animateScale: true
    }
  }

  render(){
    // console.log('%c Impact Props: ', 'color: purple', this.homeCarbonData());
    return(
      <div>
        <Doughnut data={this.data} options={this.options}/>
      </div>
    )
  }
}

const mapStateToProps = ({ user: { user: { goals } } }) => ({
  goals
})

export default connect(mapStateToProps)(ImpactSummary)
