// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

// user files
import { fetchGoal } from '../actions/fetchGoal';
import GoalPolarChart from './goalShowPagePolarChart';


class GoalShowPage extends Component {

  componentDidMount() {
    const goalID = this.props.match.params.id // this params object will contain all wildcard tokens in our url route -> I am pulling off the id
    this.props.fetchGoal(goalID);
    // debugger
  }

  background = require('../images/background.jpg')
  sectionStyle = {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'noRepeat',
      backgroundImage: 'url(' + this.background + ')'
  };

  render(){
    console.log('%c GoalShow Props: ', 'color: yellow', this.props);
    const { goal } = this.props;

    if(!goal){
      return(
        <div>
          Loading...
          <br /><br />
          <Link to='/'>
            <Button negative>Back To Goals</Button>
          </Link>
        </div>
      )
    }

    return (
      <div style={ this.sectionStyle }>
        <br /><br /><br /><br /><br /><br />
        <Grid>
          <Grid.Row columns={2} centered>
            <Grid.Column width={8} textAlign='center'>
              <Link to='/'>
                <Button color='vk'>Back To Main Goal Page List</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <br /><br /><br /><br /><br /><br />
          <Grid.Row columns={2} centered>
            <Grid.Column width={8} textAlign='center'>
              <Card textalign='center' height='500px' width='500px' key={goal.id}>
                <Card.Header><h3>{goal.title}</h3></Card.Header>
                <Card.Content >
                  <Image src='https://images-na.ssl-images-amazon.com/images/I/41Nxm91N6WL.jpg' alt="oh no!" height='75px' width='75px'/>
                  <Card.Meta>Difficulty: {goal.difficulty}</Card.Meta>
                  <Card.Description>CO2 Reduction: {goal.footprint}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button color='black' fluid>
                    <Icon name='add' />
                    Commit to This Goal
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={8} textAlign='center'>
              {/* <GoalPolarChart /> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      );
    }
}

function mapStateToProps({ goals }, ownProps){
  // debugger
  // this GoalShowPage component will now only recieve the 1 that a user clicks on
  return { goal: goals[ownProps.match.params.id] };
}

export default withRouter(connect(mapStateToProps, { fetchGoal })(GoalShowPage));
