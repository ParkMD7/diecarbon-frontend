// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal, Statistic, Divider, Form } from 'semantic-ui-react';

// user files
import { sendEmailToRep } from '../actions/sendEmailToRep';

class EmailFootprintModal extends Component {
  constructor(props){
    super(props)

    this.calculateTotalCarbonReduced = () => {
      let totalCarbonReduced = this.props.userGoals.reduce((sum, goal) => sum + goal.footprint, 0)
      return totalCarbonReduced
    }

    this.state = {
      user_email_message: `Dear Representitive, \n
        My name is ${this.props.userInfo} and I am one of the millions of New Yorkers that you represent. I am emailing you today \n
        to let you know that climate change is an important issue to me; somuch so that I have signed up for this application, di(e)carbon, \n
        in order to track my carbon footprint and commit to various goals in hopes of lowering my emissons. I know that this issue is equally \n
        important to you so I'd like to encourage you to also commit to lowering your carbon footprint. I have committed to ${this.props.userGoals.length} goals \n
        and lowered by carbon footprint by ${this.calculateTotalCarbonReduced()} lbs/year. I encourage you to join me by making a committment to lower your footprint too.\n
        Sincerely, \n
        ${this.props.userInfo}`
    }
  }

  handleEmailSubmit = () => {
    const userID = this.props.userID.toString()
    this.props.sendEmailToRep(userID, this.state.user_email_message)
    alert('Your Email Has Been Submitted!')
  }

  render(){
    return(
      <Modal trigger={<Button width='1000px' size='huge' color='red'><span style={{fontFamily:"Montserrat"}}>Email Your <span style={{color: 'black'}}>Carbon Footprint</span> Reduction Summary to Your Rep</span></Button>} closeIcon>
        <Header icon='mail' content='Remind Your Local Rep That Climate Change Is An Important Issue to You' />
        <Modal.Content>
          <Form size="small" key="small" onSubmit={this.handleEmailSubmit} >
            <Form.TextArea name="summary" value={this.state.user_email_message} style={{height: '450px'}} disabled/>
            <Button centered inverted as={ Link } name='sendEmail' to='/' color='green' type='submit' >
              <Icon name='checkmark' color='green' size='large' />
              Send Email
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default connect(null, { sendEmailToRep })(EmailFootprintModal)
