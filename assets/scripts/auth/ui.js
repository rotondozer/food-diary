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

const getDateMastersSuccess = (data) => {
  console.log('getDateMastersSuccess in ui.js')
  console.log(data)
  console.table(data.date_masters)
}

const getFoodLogsSuccess = (data) => {
  console.log('getFoodLogsSuccess in ui.js')
  console.log(data)
  console.table(data.food_logs)
  // for (let i = 0; i < data.food_logs.length; i++) {
  //   $('#games-content').append('<div>Game ID:' + data.games[i].id + '</div>')
  //   $('#games-content').append('<div>Game STATE:' + data.games[i].cells + '</div>')
  // }
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
  getDateMastersSuccess,
  signUpSuccess
}
