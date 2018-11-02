// dependencies
import React from 'react';
import { Grid } from 'semantic-ui-react';

// user files
import GoalCategoryContainer from '../containers/goalCategoryContainer';
import GoalListContainer from '../containers/goalListContainer';
import YouTubePlayer from './youtubePlayer';

const MainPage = () => {

    return (
        <Grid>

          <Grid.Column width={8} height='700px' className="ui container center aligned">
            <YouTubePlayer />
          </Grid.Column>


          <Grid.Column width={8} height='700px' className="ui container center aligned">
            <GoalListContainer />
          </Grid.Column>

        </Grid>
    );
  }


export default MainPage;
