// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footprint extends Component {

  render() {
    console.log('%c GoalShow Props: ', 'color: pink', this.props);

    // if(!this.props.loggedIn){
    //   return (
    //     <div>
    //       <h2 style={{color: 'red'}}>(-40,000 lbs/yr)</h2>
    //       <h4>The Average Person's Carbon Footprint</h4>
    //     </div>
    //   )
    // }

    return (
      <div>
        <h2 style={{color: 'red'}}>{this.props.footprint}</h2>
        <h4>{this.props.name}</h4>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  name: user.name,
  footprint: user.footprint
})

// const mapStateToProps = ({ user: { authenticatingUser, failedLogin, error, loggedIn } }) => ({
//   authenticatingUser,
//   failedLogin,
//   error,
//   loggedIn
// })

export default connect(mapStateToProps)(Footprint);
