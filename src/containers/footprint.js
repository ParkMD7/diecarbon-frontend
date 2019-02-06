// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import CountUp from 'react-countup';


class Footprint extends Component {

  // NOTE: this function uses reduce to calculate the total carbon a user has lowered their footprint by
  calculateTotalCarbonReduced = () => {
    let totalCarbonReduced = this.props.userCommittedGoals.reduce((sum, goal) => sum + goal.footprint, 0)
    return totalCarbonReduced
  }

  // NOTE: this function takes the total from calculateTotalCarbonReduced() and subtracts it from 40,000 (the starting carbon footprint for every new user)
  calculateTotalCarbonFootprint = () => {
    let total
    let carbonReduced = this.calculateTotalCarbonReduced()
    total = (40000 + carbonReduced)
    return total
  }

  render() {

    if(!this.props.loggedIn){
      return (
        <div>
          <h2 style={{color: 'red', 'fontFamily':'Montserrat'}}>40,000 lbs/yr</h2>
        </div>
      )
    }

    return (
      <>
        {this.calculateTotalCarbonFootprint() >= 40000 ?
          <h1 style={{color: 'red'}}><CountUp start={0} end={this.calculateTotalCarbonFootprint()} delay={0} redraw={true} duration={1} suffix=" lbs/yr" useEasing={false} separator=",">
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp></h1>
        :
        <h1 style={{color: 'lightgreen', 'fontFamily':'Montserrat'}}><CountUp start={0} end={this.calculateTotalCarbonFootprint()} delay={0} redraw={true} duration={1} suffix=" lbs/yr" useEasing={false} separator="," >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp></h1>
        }
      </>
    );
  }

}


const mapStateToProps = ({ user }) => ({
  userCommittedGoals: user.userCommittedGoals,
  loggedIn: user.loggedIn
})

export default connect(mapStateToProps)(Footprint);
