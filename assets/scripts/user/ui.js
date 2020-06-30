const store = require('./store.js')

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
}

module.exports = {
  displayMessage,
  displayToken
}
