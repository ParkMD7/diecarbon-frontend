// dependencies
import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';

// user files
import GoalCategoryContainer from '../containers/goalCategoryContainer';
import GoalListContainer from '../containers/goalListContainer';

const MainPage = () => {

    return (
          <Grid divided='vertically' relaxed>
            <Grid.Row columns={2}>

              <Grid.Column>
                <GoalCategoryContainer />
              </Grid.Column>

              <Divider vertical></Divider>

              <Grid.Column>
                <GoalListContainer />
              </Grid.Column>

            </Grid.Row>
          </Grid>
    );
  }


export default MainPage;
