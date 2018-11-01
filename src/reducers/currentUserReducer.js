export default (
  state = {
    id: 0,
    name: '',
    age: '',
    username: '',
    email: '',
    password: '',
    location: '',
    picture: '',
    footprint: 40000,
    goals: []
  },
  action) => {
    switch (action.type) {

      case 'LOGIN_OR_SIGN_UP':
        return Object.assign({}, action.user)

      case 'SIGNOUT':
        return Object.assign({}, action.user)

      default:
        return state
  }
}
