'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  console.log('sign in success!')
  // $('#signedInUser').text(data.user.email)
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('signed out')
  // $('#signedInUser').text('')
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const onCreateDateSuccess = (data) => {
  console.log(data.date_master)
  app.date_master = data.date_master
  app.date_master.id = data.date_master.id
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
  for (let i = 0; i < data.food_logs.length; i++) {
    $('.food-description').append('<div>Description: ' + data.food_logs[i].description + '</div>')
    $('.food-time').append('<div>Time: ' + data.food_logs[i].time + '</div>')
    $('.food-date').append('<div>Date: ' + data.food_logs[i].date_master.date + '</div>')
  }
}

const getFlByDateSuccess = (data) => {
  console.log('getFlByDateSuccess')
}

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
  getFlByDateSuccess,
  signUpSuccess,
  onCreateDateSuccess
}
