const config = require('./config')

// Build new call object
const apiCall = {
  call: {},
  clear: function () {
    this.call = {}
  },
  addHeader: function (token) {
    this.call.headers = {
      Authorization: 'Bearer ' + token
    }
    return this
  },
  addBody: function (data) {
    this.call.data = data
    return this
  },
  callAjax: function () {
    // console.log('apiCall', this.call)
    return $.ajax(this.call)
  }
}

const createCall = function (method, path) {
  apiCall.clear()
  apiCall.call.method = method
  apiCall.call.url = config.apiUrl + path
  return apiCall
}

module.exports = {
  createCall
}
