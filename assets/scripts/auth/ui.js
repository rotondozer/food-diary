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
  // Don't think I need this anymore
  console.log(data.date_master)
  app.date_master = data.date_master
  app.date_master.id = data.date_master.id
}

const onUpdateDateSuccess = (data) => {
  console.log('updated date successfully!')
  console.log(data)
}

const onDeleteDateSuccess = (data) => {
  console.log('DELETED date successfully')
  console.log(data)
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
  if (data.food_logs.length > 0) {
    for (let i = 0; i < data.food_logs.length; i++) {
      $('.food-description').append('<div>Description: ' + data.food_logs[i].description + '</div>')
      $('.food-time').append('<div>Time: ' + data.food_logs[i].time + '</div>')
      $('.food-date').append('<div>Date: ' + data.food_logs[i].date_master.date + '</div>')
    }
  } else {
    $('.food-description').append('<div>Looks like you haven\'t made any logs yet</div>')
  }
}

const getAllergicReactionLogsSuccess = (data) => {
  console.log('getAllergicReactionLogsSuccess in ui.js')
  console.table(data)
}

const getFlByDateSuccess = (data) => {
  console.log(data.food_logs)
  const foodLogs = data.food_logs
  console.log('getFlByDateSuccess')
  if (foodLogs.length > 0) {
    for (let i = 0; i < foodLogs.length; i++) {
      $('.food-description').append('<div>Description: ' + foodLogs[i].description + '</div>')
      $('.food-time').append('<div>Time: ' + foodLogs[i].time + '</div>')
      $('.food-date').append('<div>Date: ' + foodLogs[i].date_master.date + '</div>')
    }
  } else {
    $('.food-description').append('<div>Looks like you haven\'t made any logs yet</div>')
  }
}

const createFoodLogSuccess = (data) => {
  console.log('createFoodLogSuccess in ui.js')
  console.log(data)
}

const createAllergicReactionLogSuccess = (data) => {
  console.log('createAllergicReactionLogSuccess in ui.js')
  console.table(data)
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
  getAllergicReactionLogsSuccess,
  getDateMastersSuccess,
  getFlByDateSuccess,
  signUpSuccess,
  onCreateDateSuccess,
  onUpdateDateSuccess,
  onDeleteDateSuccess,
  createFoodLogSuccess,
  createAllergicReactionLogSuccess
}
