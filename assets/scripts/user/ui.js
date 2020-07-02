const store = require('./../store.js') // probably don't need this

const $message = $('#user-message')
const $token = $('#token')
const $allForms = $('form')

const displayMessage = function (message) {
  $message.text(JSON.stringify(message))
  // displayToken()
  $allForms.trigger('reset')
}

const displayToken = function () {
  const token = store.getToken()
  console.log('display token', token)
  $token.text(token)
  // $token.text(store.getToken())
}

module.exports = {
  displayMessage,
  displayToken
}
