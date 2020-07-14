const store = require('./../store.js')

const isAuthorOf = function (author) {
  return author === store.getAuthor()
}

module.exports = isAuthorOf
