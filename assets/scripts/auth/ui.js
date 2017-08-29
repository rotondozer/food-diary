'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  console.log('sign in success!')
  $('#sign-up, #sign-in, .sign-up-prompt, .sign-in-prompt').hide()
  $('.page-2').show()
  $("button[name='my-acct']").removeClass('disabled')
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('signed out')
  $('.page-2').hide()
  $('.my-acct').hide()
  $('#sign-up').hide()
  $("button[name='main']").hide()
  $('#sign-up, #sign-in, .sign-up-prompt, .sign-in-prompt').show()
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const onCreateDateSuccess = (data) => {
  console.log(data.date_master)
  // TODO This can be used to pass the date_master_id without searching database
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
  const date = data.date_masters
  if (date.length > 0) {
    for (let i = 0; i < date.length; i++) {
      $('.date-master-date').html('<div>' + date[i].date + '</div>')
    }
  } else {
    $('.user-message').html('<div>Looks like you haven\'t initialized any logs yet</div>')
  }
}

const getFoodLogsSuccess = (data) => {
  console.log('getFoodLogsSuccess in ui.js')
  console.log(data)
  console.table(data.food_logs)
  if (data.food_logs.length > 0) {
    for (let i = 0; i < data.food_logs.length; i++) {
      $('.food-description').html('<div>' + data.food_logs[i].description + '</div>')
      $('.food-time').html('<div>' + data.food_logs[i].time + '</div>')
      $('.food-date').html('<div>Date: ' + data.food_logs[i].date_master.date + '</div>')
    }
  } else {
    $('.user-message').html('<div>Looks like you haven\'t made any food logs yet</div>')
  }
}

const getAllergicReactionLogsSuccess = (data) => {
  console.log('getAllergicReactionLogsSuccess in ui.js')
  console.table(data)
  const ARLogs = data.allergic_reaction_logs
  if (ARLogs.length > 0) {
    for (let i = 0; i < ARLogs.length; i++) {
      $('.reaction-symptom').html('<div>' + ARLogs[i].symptom + '</div>')
      $('.reaction-time').html('<div>' + ARLogs[i].time + '</div>')
      $('.reaction-date').html('<div>' + ARLogs[i].date_master.date + '</div>')
    }
  } else {
    $('.user-message').html('<div>Looks like you haven\'t made any allergy logs yet</div>')
  }
}

const getFlByDateSuccess = (data) => {
  console.log(data.food_logs)
  const foodLogs = data.food_logs
  console.log('getFlByDateSuccess')
  if (foodLogs.length > 0) {
    for (let i = 0; i < foodLogs.length; i++) {
      $('.food-description').html('<div>Description: ' + foodLogs[i].description + '</div>')
      $('.food-time').html('<div>Time: ' + foodLogs[i].time + '</div>')
      $('.food-date').html('<div>Date: ' + foodLogs[i].date_master.date + '</div>')
    }
  } else {
    $('.user-message').html('<div>Looks like you haven\'t made any logs yet</div>')
  }
}

const getArlByDateSuccess = (data) => {
  console.log('getArlByDateSuccess in ui.js')
  console.table(data.allergic_reaction_logs)
  const ARLogs = data.allergic_reaction_logs
  console.log('NOW DISPLAY THIS INFO IN HTML')
  if (ARLogs.length > 0) {
    for (let i = 0; i < ARLogs.length; i++) {
      $('.reaction-symptom').html('<div>' + ARLogs[i].symptom + '</div>')
      $('.reaction-time').html('<div>' + ARLogs[i].time + '</div>')
      $('.reaction-date').html('<div>' + ARLogs[i].date_master.date + '</div>')
    }
  } else {
    $('.user-message').html('<div>Looks like you haven\'t made any logs yet</div>')
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
  $('#sign-up').hide()
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
  getArlByDateSuccess,
  signUpSuccess,
  onCreateDateSuccess,
  onUpdateDateSuccess,
  onDeleteDateSuccess,
  createFoodLogSuccess,
  createAllergicReactionLogSuccess
}
