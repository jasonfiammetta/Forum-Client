const store = require('./../store.js')

const authorString = function (author) {
  if (author) {
    return author.email ? author.email : store.getAuthor()
  } else {
    return 'Deleted User'
  }
}

module.exports = authorString
