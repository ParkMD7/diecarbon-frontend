// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Loader } from 'semantic-ui-react'

// user files
import { fetchCurrentUser } from '../actions/loginUser'


const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      // POTENTIAL SECURITY FLAW!!! my tokens don't expire
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
      // if i have a token but don't know who it belongs to, ask the server for that user's data
    }

    render() {
      console.log('%c PROPS IN WITHAUTH HOC ', 'color: green', this.props)
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        //i have a token and i'm logged in according to redux
        // wrapped component in our case is Profile
        return <WrappedComponent />
      } else if (localStorage.getItem('jwt') && this.props.authenticatingUser) {
        //we're currently fetching, show a loading spinner
        return <Loader active inline="centered" />
      } else {
        //user is not AUTHORIZED to see this component
        return <Redirect to="/login" />
      }
    }
  }

  const mapStateToProps = ({user}) => {
    return {
      loggedIn: user.loggedIn,
      authenticatingUser: user.authenticatingUser
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchCurrentUser: () => dispatch(fetchCurrentUser()), //dispatch is automagically provided by redux
    }
  }


  return connect(mapStateToProps, { fetchCurrentUser })(AuthorizedComponent)
}

export default withAuth
