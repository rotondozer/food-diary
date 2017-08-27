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

const createDate = function (date) {
  return $.ajax({
    url: app.host + '/date_masters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'date_master': {
        'user_id': app.user.id,
        'date': date
      }
    }
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
    url: app.host + '/food_logs/' + app.user.id + '/date_masters/' + data,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    // 'yyyy-mm-dd'
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
  createDate
}
