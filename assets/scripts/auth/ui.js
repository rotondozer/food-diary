'use strict'
// remove signIn and signOut
const app = require('../app.js')

// remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  console.log('sign in success!')
  $('#signedInUser').text(data.user.email)
}

// remove me before code-along
const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('signed out')
  $('#signedInUser').text('')
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}
const getFoodLogsSuccess = (data) => {
  console.log('getFoodLogsSuccess in ui.js')
}
// I made this
const signUpSuccess = (data) => {
  console.log(data)
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  getFoodLogsSuccess,
  signUpSuccess
}
