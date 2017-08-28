'use strict'

const app = require('../app')
const getFormFields = require('../../../lib/get-form-fields.js')

// authApi.signUp(authUi.success, authUi.failure, data)
const signUp = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const createDate = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/users/' + app.user.id + '/date_masters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const getDateMasters = function (data) {
  console.log('getDateMasters in api.js')
  return $.ajax({
    method: 'GET',
    url: app.host + '/date_masters/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getFoodLogs = function (data) {
  console.log('getFoodLogs')
  console.log(data)
  return $.ajax({
    method: 'GET',
    url: app.host + '/food_logs/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getFlByDate = function (data) {
  console.log('getFlByDate data === ' + data)
  return $.ajax({
    method: 'GET',
    // url: /date_masters/:date_master_id/food_logs(.:format)
    url: app.host + '/users/' + app.user.id + '/date_masters/' + data + '/food_logs',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createFoodLog = function (data) {
  console.log('createFoodLog in api.js')
  console.log(data.food_log.date_master_id)
  // date to be converted to date_master_id
  const date = data.food_log.date_master_id
  return $.ajax({
    method: 'POST',
    url: app.host + '/users/' + app.user.id + '/date_masters/' + date + '/food_logs',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getFoodLogs,
  getDateMasters,
  getFlByDate,
  getFormFields,
  createDate,
  createFoodLog
}
