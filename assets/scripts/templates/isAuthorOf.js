const store = require('./../store.js')

const isAuthorOf = function (author) {
  // console.log('owned?', author, store.getAuthor())
  return author === store.getAuthor()
}

module.exports = isAuthorOf
