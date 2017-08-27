'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
// const app = require('../app')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.fail)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.fail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.fail)
}

const onCreateDate = function (event) {
  event.preventDefault()
  const date = $("input[name='credentials[date-create]']").val()
  console.log(date)
  api.createDate(date)
    .then(ui.onCreateDateSuccess)
    .catch(ui.fail)
}

const onGetDateMasters = function (event) {
  event.preventDefault()
  console.log('onGetDateMasters in events.js')
  api.getDateMasters()
    .then(ui.getDateMastersSuccess)
    .catch(ui.fail)
}

const onGetFoodLogs = function (event) {
  event.preventDefault()
  console.log('onGetFoodLogs in events.js')
  api.getFoodLogs()
    .then(ui.getFoodLogsSuccess)
    .catch(ui.fail)
}

const onGetFlByDate = function (event) {
  event.preventDefault()
  // Get input 'yyyy-mm-dd'
  const dateFilter = $("input[name='credentials[date]']").val()

  console.log('dateFilter === ' + dateFilter)
  console.log('onGetFlByDate in events.js')
  // pass input to API call
  api.getFlByDate(dateFilter)
    .then(ui.getFlByDateSuccess)
    .catch(ui.fail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#get-all-food-logs').on('click', onGetFoodLogs)
  $('#get-all-date-masters').on('click', onGetDateMasters)
  $('#get-food-by-date').on('submit', onGetFlByDate)
  $('#create-date').on('submit', onCreateDate)
}

module.exports = {
  addHandlers
}
