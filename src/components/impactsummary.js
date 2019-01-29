// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';

class ImpactSummary extends Component {

  homeCarbonData = () => {
    let footprintArray = []
    let addedGoal = this.props.userCommittedGoals.map(goal => {
      if(goal.category === 'Home'){
        return footprintArray.push(goal.footprint)
      }
    })
    let finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
    return finalCalc
  }

  travelCarbonData = () => {
    let footprintArray = []
    let addedGoal = this.props.userCommittedGoals.map(goal => {
      if(goal.category === 'Travel'){
        return footprintArray.push(goal.footprint)
      }
    })
    let finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
    return finalCalc
    }

  foodCarbonData = () => {
    let footprintArray = []
    let addedGoal = this.props.userCommittedGoals.map(goal => {
      if(goal.category === 'Food'){
        return footprintArray.push(goal.footprint)
      }
    })
    let finalCalc = footprintArray.reduce((sum, number) => sum + number, 0)
    return finalCalc
    }

  goodsCarbonData = () => {
    let footprintArray = []
    let addedGoal = this.props.userCommittedGoals.map(goal => {
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
        backgroundColor: ['#A21C48', '#E93323', '#F3961F','#ECE439'],
        data: [this.homeCarbonData(), this.travelCarbonData(), this.foodCarbonData(), this.goodsCarbonData()]
      }],
    borderColor: 'white'
  }
  options = {
    title: {
      display: true,
      text: 'Carbon Reduced By Goal Category',
      fontColor: 'black',
      fontFamily: 'Raleway',
      fontSize: 18
    },
    legend: {
      labels: {
          fontColor: "black",
          fontFamily: 'Raleway',
          fontSize: 12,
          padding: 20
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
    return(
      <div>
        <Doughnut data={this.data} options={this.options} redraw={true}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userCommittedGoals: state.user.userCommittedGoals
})

export default connect(mapStateToProps)(ImpactSummary)
