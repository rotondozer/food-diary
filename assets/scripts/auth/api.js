'use strict'

const app = require('../app')
const getFormFields = require('../../../lib/get-form-fields.js')

// authApi.signUp(authUi.success, authUi.failure, data)
const signUp = function (data) {
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
  return $.ajax({
    url: `${app.host}/users/${app.user.id}/date_masters`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const updateDate = function (data) {
  const oldDate = data.date_master.date_old
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/users/' + app.user.id + '/date_masters/' + oldDate,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const getDateMasters = function (data) {
  return $.ajax({
    method: 'GET',
    url: app.host + '/date_masters/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getFoodLogs = function () {
  return $.ajax({
    method: 'GET',
    url: app.host + '/food_logs/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getAllergicReactionLogs = function () {
  return $.ajax({
    method: 'GET',
    url: app.host + '/allergic_reaction_logs/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getFlByDate = function (date) {
  return $.ajax({
    method: 'GET',
    // url: /date_masters/:date_master_id/food_logs(.:format)
    url: `${app.host}/users/${app.user.id}/food_logs/${date}`,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getArlByDate = function (date) {
  return $.ajax({
    method: 'GET',
    url: `${app.host}/users/${app.user.id}/allergic_reaction_logs/${date}`,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createFoodLog = function (data) {
  // date to be converted to date_master_id
  const date = data.food_log.date_master_id
  return $.ajax({
    method: 'POST',
    url: `${app.host}/users/${app.user.id}/food_logs/${date}`,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const createAllergicReactionLog = function (data) {
  // date to be converted to date_master_id
  const date = data.allergic_reaction_log.date_master_id
  return $.ajax({
    method: 'POST',
    url: `${app.host}/users/${app.user.id}/allergic_reaction_logs/${date}`,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const deleteDate = function (data) {
  const date = data.date_master.date
  return $.ajax({
    url: app.host + '/users/' + app.user.id + '/date_masters/' + date,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getFoodLogs,
  getAllergicReactionLogs,
  getDateMasters,
  getFlByDate,
  getArlByDate,
  getFormFields,
  createDate,
  updateDate,
  deleteDate,
  createFoodLog,
  createAllergicReactionLog
}
