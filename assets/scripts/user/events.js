const api = require('./api.js')
const ui = require('./ui.js')
const view = require('./../view.js')
const store = require('./../store.js')
const forumEvents = require('./../forum/events.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const handleForm = function (event) {
  event.preventDefault()
  return getFormFields(event.target)
}

const onSignUp = function (event) {
  api.signUp(handleForm(event))
  // .then(controller.handleSignUp)
    // .then(store.setUser)
    .then(user => store.setUser(user))
    .then(ui.displayMessage)
    .then(view.showLoggedInView)
    .then(() => { if (store.currentForum) { view.showPostCrudView() } })
    .then(forumEvents.showAllForums)
    .catch(console.error)
}

// .then(store.setUser) Doesn't work for some reason,
// but .then(user => store.setUser(user)) does????????
const onLogIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.logIn(data)
    // .then(controller.handleLogIn)
    .then(a => store.setUser(a)) // ???
    // .then(store.setUser)
    .then(ui.displayMessage)
    .then(view.showLoggedInView)
    .then(() => { if (store.currentForum) { view.showPostCrudView() } })
    .then(forumEvents.showAllForums)
    .catch(console.error)
}

const onLogOut = function (event) {
  event.preventDefault()
  api.logOut()
  // .then(controller.handleLogOut)
    .then(a => store.unsetUser(a))
    .then(ui.displayMessage)
    .then(view.showLoggedOutView)
    .then(view.hidePostCrudView)
    .then(forumEvents.showAllForums)
    .catch(console.error)
}

const onChangePassword = function (event) {
  api.changePassword(handleForm(event))
  // .then(controller.handleChangePassword)
    .then(ui.clearForums)
    .catch(console.error)
}

const onDeleteAccount = function (event) {
  api.deleteAccount(handleForm(event))
  // .then(controller.handleDeleteAccount)
    .then(store.unsetUser)
    .then(ui.displayMessage)
    .then(view.showLoggedOutView)
    .then(view.hidePostCrudView)
    .then(forumEvents.showAllForums)
    .catch(console.error)
}

module.exports = {
  onSignUp,
  onLogIn,
  onLogOut,
  onChangePassword,
  onDeleteAccount
}
