// dependencies
import React from 'react';
import { Grid } from 'semantic-ui-react';

// user files
// import GoalCategoryContainer from '../containers/goalCategoryContainer';
import GoalListContainer from '../containers/goalListContainer';
import YouTubePlayer from './youtubePlayer';
import withAuth from '../hocs/withAuth';

const MainPage = () => {

  let background = require('../images/background.jpg')
  const sectionStyle = {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'noRepeat',
      backgroundImage: 'url(' + background + ')'
  };

    return (
      <div style={ sectionStyle }>
        <br /><br /><br /><br /><br /><br />
        <Grid>

          <Grid.Column width={8} className="ui container center aligned">
            <YouTubePlayer />
          </Grid.Column>


          <Grid.Column width={8} className="ui container center aligned" style={{overflowY: 'scroll', height: '900px', 'padding-right': '50px'}} >
            <GoalListContainer />
          </Grid.Column>

        </Grid>
      </div>
    );
  }


export default withAuth(MainPage);
