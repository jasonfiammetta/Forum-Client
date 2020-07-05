const $message = $('#user-message')
const $token = $('#token')
const $allForms = $('form')
const store = require('./../store')

const displayMessage = function (message) {
  $message.text(JSON.stringify(message))
  displayToken()
  $allForms.trigger('reset')
}

const displayToken = function () {
  const token = store.getToken()
  console.log('display token', token)
  $token.text(token)
  // $token.text(store.getToken())
}

const clearForums = function () {
  $allForms.trigger('reset')
}

module.exports = {
  displayMessage,
  // displayToken
  clearForums
}
