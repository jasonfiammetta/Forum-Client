const store = require('./../store.js') // probably don't need this

const $message = $('#message')
const $token = $('#token')
const $allForms = $('form')

const displayMessage = function (message) {
  $message.text(JSON.stringify(message))
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
