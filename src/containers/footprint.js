// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

class Footprint extends Component {

  formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  calculateTotalCarbonReduced = () => {
    let totalCarbonReduced = this.props.userCommittedGoals.reduce((sum, goal) => sum + goal.footprint, 0)
    return totalCarbonReduced
  }

  calculateTotalCarbonFootprint = () => {
    let total
    let carbonReduced = this.calculateTotalCarbonReduced()
    total = (40000 + carbonReduced)
    return total
  }

  render() {
    console.log('%c Footprint Props: ', 'color: orange', this.props);

    if(!this.props.loggedIn){
      return (
        <div>
          <h4>The Average Person's Carbon Footprint</h4>
          <h2 style={{color: 'red'}}>(-40,000 lbs/yr)</h2>
        </div>
      )
    }

    return (
      <Grid divided='vertically' centered verticalAlign='middle'>
        <Grid.Row columns={1}>
          <Grid.Column width={16} textAlign='center' stretched verticalAlign='middle'>
            {this.calculateTotalCarbonFootprint() >= 40000 ?
              <h2 style={{color: 'white'}}>{this.formatName(this.props.user.name)}'s Footprint: <span style={{color: 'red'}}>{this.calculateTotalCarbonFootprint()}</span> lbs/yr</h2>
            :
            <h2 style={{color: 'white'}}>{this.formatName(this.props.user.name)}'s Footprint: <span style={{color: 'lightgreen'}}>{this.calculateTotalCarbonFootprint()}</span> lbs/yr</h2>
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

}


const mapStateToProps = ({ user }) => ({
  user: user.user,
  userCommittedGoals: user.userCommittedGoals,
  loggedIn: user.loggedIn
})

export default connect(mapStateToProps)(Footprint);
