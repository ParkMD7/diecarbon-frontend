// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import CountUp from 'react-countup';

// user files
import { fetchUserGoals } from '../actions/fetchUserGoals';

class Footprint extends Component {

  // componentDidMount() {
  //   const userID = this.props.user.id
  //   this.props.fetchUserGoals(userID)
  // }

  // name = () => {
  //   this.props.user.name
  // }

  formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
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

  // calculateTotalCarbonFootprintStart = () => {
  //   let total
  //   let carbonReduced = this.calculateTotalCarbonReduced()
  //   total = (40000 + carbonReduced - 1)
  //   return total
  // }

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
      <Grid divided='vertically' centered >
        <Grid.Row columns={1}>
          <Grid.Column width={8} textAlign='center' stretched verticalAlign='middle'>
            <h3 style={{color: 'white'}}>{this.formatName(this.props.user.name)}'s Footprint</h3>
          </Grid.Column>
          <Grid.Column width={8} textAlign='center' stretched verticalAlign='middle'>
            {this.calculateTotalCarbonFootprint() >= 40000 ?
              // <h2 style={{color: 'white'}}>{this.formatName(this.props.user.name)}'s Footprint: <span style={{color: 'red'}}>{this.calculateTotalCarbonFootprint()}</span> lbs/yr</h2>
                <h2 style={{color: 'red'}}><CountUp start={0} end={this.calculateTotalCarbonFootprint()} delay={0} redraw={true} duration={1} suffix=" lbs/yr" useEasing={false} >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp></h2>
            :
              // <h2 style={{color: 'white'}}>{this.formatName(this.props.user.name)}'s Footprint: <span style={{color: 'lightgreen'}}>{this.calculateTotalCarbonFootprint()}</span> lbs/yr</h2>

              <h2 style={{color: 'lightgreen'}}><CountUp start={0} end={this.calculateTotalCarbonFootprint()} delay={0} redraw={true} duration={1} suffix=" lbs/yr" useEasing={false} separator=" " >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp></h2>
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

export default connect(mapStateToProps, { fetchUserGoals })(Footprint);
