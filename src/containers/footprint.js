// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

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
      <Grid divided='vertically' centered>
        <Grid.Row columns={2}>
          <Grid.Column width={8} textAlign='center' stretched verticalAlign='middle'>
            <h3 style={{color: 'black'}}>{this.formatName(this.props.user.user.name)}'s Current Footprint: </h3>
          </Grid.Column>
          <Grid.Column width={8} textAlign='center' stretched verticalAlign='middle'>
            {this.calculateTotalCarbonFootprint() >= 40000 ?
              <h2 style={{color: 'red'}}>{this.calculateTotalCarbonFootprint()} lbs/yr</h2>
            :
            <h2 style={{color: 'green'}}>{this.calculateTotalCarbonFootprint()} lbs/yr</h2>
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

}


const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Footprint);
