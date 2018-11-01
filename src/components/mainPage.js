// dependencies
import React from 'react';
import { Grid } from 'semantic-ui-react'

// user files
import GoalCategoryContainer from '../containers/goalCategoryContainer';
import GoalListContainer from '../containers/goalListContainer';

const MainPage = () => {

    return (
          <Grid container columns={2}>

            <Grid.Column className="ui container left aligned">
              <GoalCategoryContainer />
            </Grid.Column>

            <Grid.Column className="ui container right aligned">
              <GoalListContainer />
            </Grid.Column>

          </Grid>
    );
  }


export default MainPage;
