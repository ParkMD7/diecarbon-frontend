# Di(e)Carbon

With the importance of combating climate change increasing daily, Di(e)Carbon is here to help you track your carbon footprint and commit to realistic everyday goals to lower it. The average person in the United States has a carbon footprint of 40,000 lbs/year. You can create a new account and then commit to goals, like turning off lights when not in use, to lower your footprint. When you're satisfied with the your efforts, Di(e)Carbon enables you to email your local representative so you can share your progress and remind them of the importance of the issue.

## Technology Stack

Di(e)Carbon was written in React with Redux, and utilized a [backend](https://github.com/ParkMD7/diecarbon-backend) written in Rails.  Rails dealt with users and their has-many / belongs-to associations to goals (each individual goal can lower a users carbon footprint). ActionMailer was also used from Rails to send an email to a local representative.  React was used as the frontend framework. Redux was used to store our current user and all goal information that was to be displayed.  

## Using the app

Follow the backend link above to clone the Rails section of this app.  After following those instructions to get the server up and running, clone down this repo.  After changing into the directory for Di(e)Carbon, run either `npm install` or `yarn` to install the node modules, and then run `npm start` or `yarn start`.

## [Demo Video](https://youtu.be/_2jFX2r_f34)
