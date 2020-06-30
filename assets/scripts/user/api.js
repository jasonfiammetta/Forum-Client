const api = require('./../api.js')
const store = require('./store.js')

const signUp = function (data) {
  return api.createCall('POST', '/sign-up')
    .addBody('credentials', data.credentials)
    .callAjax()
}

const logIn = function (data) {
  return api.createCall('POST', '/log-in')
    .addBody('credentials', data.credentials)
    .callAjax()
}

const logOut = function () {
  return api.createCall('DELETE', '/log-out')
    .addHeader(store.getToken())
    .callAjax()
}

const changePassword = function (data) {
  return api.createCall('PATCH', '/change-password')
    .addHeader(store.getToken())
    .addBody('passwords', data.passwords)
    .callAjax()
}

const deleteAccount = function (data) {
  return api.createCall('DELETE', '/delete-account')
    .addHeader(store.getToken())
    .callAjax()
}

module.exports = {
  signUp,
  logIn,
  logOut,
  changePassword,
  deleteAccount
}
