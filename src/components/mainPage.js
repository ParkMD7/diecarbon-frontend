// dependencies
import React from 'react';
import { Grid } from 'semantic-ui-react';

// user files
// import GoalCategoryContainer from '../containers/goalCategoryContainer';
import GoalListContainer from '../containers/goalListContainer';
import YouTubePlayer from './youtubePlayer';

const MainPage = () => {

    return (
        <Grid>

          <Grid.Column width={8} className="ui container center aligned">
            <YouTubePlayer />
          </Grid.Column>


          <Grid.Column width={8} className="ui container center aligned" style={{overflowY: 'scroll', height: '900px'}}>
            <GoalListContainer />
          </Grid.Column>

        </Grid>
    );
  }


export default MainPage;
