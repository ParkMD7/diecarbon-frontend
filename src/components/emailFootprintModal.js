// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal, Statistic, Divider, Form } from 'semantic-ui-react';

// user files
import { sendEmailToRep } from '../actions/sendEmailToRep';

class EmailFootprintModal extends Component {
  state = {
    user_email_message: `Dear Senator, \n
      My name is ${this.props.userInfo} and I am one of the millions of New Yorkers that you represent. I am emailing you today \n
      to let you know that climate change is an important issue to me; somuch so that I have signed up for this application, di(e)carbon, \n
      in order to track my carbon footprint and commit to various goals in hopes of lowering my emissons. I know that this issue is equally \n
      important to you so I'd like to encourage you to also commit to lowering your carbon footprint. Please follow the link below to view my profile \n
      to view the goals I've committed to as well as my reduced footprint.\n
      Sincerely, \n
      ${this.props.userInfo}`
  }

  // userGoalSummary = () => {
  //   let summary = this.props.userGoals.map( goal => {
  //     return <li>Goal: {goal.title} -- CO2 Reduced: {goal.footprint}</li>
  //   })
  //   return summary
  // }
  //
  // calculateTotalCarbonReduced = () => {
  //   let totalCarbonReduced = this.props.userGoals.reduce((sum, goal) => sum + goal.footprint, 0)
  //   return totalCarbonReduced
  // }

  handleEmailSubmit = () => {
    const userID = this.props.userID.toString()
    this.props.sendEmailToRep(userID, this.state.user_email_message)
    //debugger
    alert('Email Submitted!')
  }

  render(){
    return(
      <Modal trigger={<Button size='big' color='black'>Email Your <span style={{color: 'red'}}>Carbon Footprint</span> Reduction Summary to Your Rep</Button>} closeIcon>
        <Header icon='mail' content='Remind Your Local Senator That Climate Change Is An Important Issue to You' />
        <Modal.Content>
          <Form size="mini" key="mini" onSubmit={this.handleEmailSubmit} >
            <Form.TextArea label="email body" name="summary" value={this.state.user_email_message} style={{height: '450px'}} disabled/>
            <Button color='green' type='submit' style={{height: '35px', width: '150px'}}>
              <Icon name='checkmark' /> Send Email
            </Button>
          </Form>
          {/* <h3>Dear Senator Gillibrand,</h3>
            <p>
            My name is {this.props.userInfo} and I am one of the millions of New Yorkers that you represent. I am emailing you today
            to let you know that climate change is an important issue to me; somuch so that I have signed up for this application, di(e)carbon,
            in order to track my carbon footprint and commit to various goals in hopes of lowering my emissons. I know that this issue is equally
            important to you so I'd like to encourage you to also commit to lowering your carbon footprint. Below you can find a list of the goals
            I've committed to as well as my reduced footprint.

            <Divider />

            <Statistic color='yellow' size='mini'>
              <Statistic.Value>
            <Icon name='trophy' />
            {this.props.userGoals.length}
              </Statistic.Value>
              <Statistic.Label>Goals Committed</Statistic.Label>
            </Statistic>
            <Statistic color='green' size='mini'>
              <Statistic.Value>
            <Icon name='recycle' />
            {this.calculateTotalCarbonReduced()}
              </Statistic.Value>
              <Statistic.Label>Carbon Reduced (lbs/yr)</Statistic.Label>
            </Statistic>

            <Divider />

            <ul>{this.userGoalSummary()}</ul>


            <br /><br />
            Sincerely, <br />
            {this.props.userInfo}
          </p> */}
        </Modal.Content>
      </Modal>
    )
  }
}

// const mapStateToProps = ({ user: { user: { name, username, location, picture, goals, id, email } } }, { user: fetchedUserGoals }) => ({
//   name,
//   username,
//   location,
//   picture,
//   id,
//   email,
//   goals,
//   fetchedUserGoals
// })

export default connect(null, { sendEmailToRep })(EmailFootprintModal)
