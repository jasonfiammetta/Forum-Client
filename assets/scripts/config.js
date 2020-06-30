// 'use strict'

let apiUrl
const apiUrls = {
  production: 'https://sheltered-crag-25267.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
