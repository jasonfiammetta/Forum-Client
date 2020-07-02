const api = require('./../api.js')
const store = require('./../store.js')

const signUp = function (data) {
  return api.createCall('POST', '/sign-up')
    .addBody(data)
    .callAjax()
}

const logIn = function (data) {
  console.log(data)
  return api.createCall('POST', '/log-in')
    .addBody(data)
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
    .addBody(data)
    .callAjax()
}

const deleteAccount = function (data) {
  console.log('Deleting account')
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
