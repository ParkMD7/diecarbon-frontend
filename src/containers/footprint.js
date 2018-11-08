// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// user files
//import { setCurrentUser } from '../actions/loginUser';

class Footprint extends Component {

  formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  calculateTotalCarbonReduced = () => {
    let totalCarbonReduced = this.props.user.user.goals.reduce((sum, goal) => sum + goal.footprint, 0)
    return totalCarbonReduced
  }

  calculateTotalCarbonFootprint = () => {
    let total
    let carbonReduced = this.calculateTotalCarbonReduced()
    total = (40000 + carbonReduced)
    return total
  }

  render() {
    console.log('%c GoalShow Props: ', 'color: pink', this.props);

    if(!this.props.user.loggedIn){
      return (
        <div>
          <h2 style={{color: 'red'}}>(-40,000 lbs/yr)</h2>
          <h4>The Average Person's Carbon Footprint</h4>
        </div>
      )
    }

    return (
      <div>
        <h2 style={{color: 'red'}}>{this.formatName(this.props.user.user.name)}'s Current Footprint: {this.calculateTotalCarbonFootprint()} lbs/yr</h2>
      </div>
    );
  }

}


const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Footprint);
