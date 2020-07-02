const api = require('./../api.js')
const store = require('./../store.js')

const createPost = function (data) {
  console.log(data)
  return api.createCall('POST', '/forums/' + data.post.forum)
    .addHeader(store.getToken())
    .addBody(data)
    .callAjax()
}

module.exports = {
  createPost
}
