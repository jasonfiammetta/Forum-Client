const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const handleForm = function (event) {
  event.preventDefault()
  return getFormFields(event.target)
}

const onSignUp = function (data) {
  console.log(data)
  api.signUp(handleForm(data))
    .then(store.setUser)
    .then(ui.displayMessage)
    .catch(console.error)
}

const onLogIn = function (data) {
  console.log(data)
  api.logIn(handleForm(data))
    // .then(controller.handleLogIn)
    .then(user => store.setUser(user))
    .then(user => {
      ui.displayMessage(user)
      ui.displayToken()
    })
    .catch(console.error)
}

const onLogOut = function (data) {
  console.log(data)
  api.logOut(handleForm(data))
  // .then(controller.handleLogOut)
    .then(store.setUser)
    .then(user => {
      ui.displayMessage(user)
      ui.displayToken()
    })
    .catch(console.error)
}

const onChangePassword = function (data) {
  console.log(data)
  api.changePassword(handleForm(data))
  // .then(controller.handleChangePassword)
    .then(store.setUser)
    .then(user => {
      ui.displayMessage(user)
      ui.displayToken()
    })
    .catch(console.error)
}

const onDeleteAccount = function (data) {
  console.log(data)
  api.deleteAccount(handleForm(data))
  // .then(controller.handleDeleteAccount)
    .then(store.setUser)
    .then(ui.displayMessage)
    .catch(console.error)
}

module.exports = {
  onSignUp,
  onLogIn,
  onLogOut,
  onChangePassword,
  onDeleteAccount
}
