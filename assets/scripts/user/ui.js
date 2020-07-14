const $message = $('#user-message')
// const $token = $('#token')
const $allForms = $('form')
const $collapsables = $('.collapse-auth')
// const store = require('./../store')

const displayMessage = function (message) {
  $message.text(JSON.stringify(message))
  // displayToken()
  $allForms.trigger('reset')
  $collapsables.collapse('hide')
}

// const displayToken = function () {
//   const token = store.getToken()
//   console.log('display token', token)
//   $token.text(token)
//   // $token.text(store.getToken())
// }

const clearForums = function () {
  $allForms.trigger('reset')
  $collapsables.collapse('hide')
}

const failed = function (message) {
  $message.text(message)
}

module.exports = {
  displayMessage,
  // displayToken
  clearForums,
  failed
}
