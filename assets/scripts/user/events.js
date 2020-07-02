const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const handleForm = function (event) {
  event.preventDefault()
  return getFormFields(event.target)
}

const onSignUp = function (event) {
  api.signUp(handleForm(event))
  // .then(controller.handleSignUp)
    .then(store.setUser)
    .then(ui.displayMessage)
    .catch(console.error)
}

const onLogIn = function (event) {
  api.logIn(handleForm(event))
    // .then(controller.handleLogIn)
    .then(user => store.setUser(user))
    .then(user => {
      ui.displayMessage(user)
      ui.displayToken()
    })
    .catch(console.error)
}

const onLogOut = function (event) {
  api.logOut(handleForm(event))
  // .then(controller.handleLogOut)
    .then(store.unsetUser)
    .then(ui.displayMessage)
    .catch(console.error)
}

const onChangePassword = function (event) {
  api.changePassword(handleForm(event))
  // .then(controller.handleChangePassword)
    .catch(console.error)
}

const onDeleteAccount = function (event) {
  api.deleteAccount(handleForm(event))
  // .then(controller.handleDeleteAccount)
    .then(store.unsetUser)
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
