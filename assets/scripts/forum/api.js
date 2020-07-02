const api = require('./../api.js')
const store = require('./../store.js')

const createForum = function (data) {
  return api.createCall('POST', '/forums')
    .addHeader(store.getToken())
    .addBody(data)
    .callAjax()
}

const getForums = function () {
  return api.createCall('GET', '/forums')
    .callAjax()
}

const getUserForums = function () {
  return api.createCall('GET', '/forums')
    .addHeader(store.getToken())
    .callAjax()
}

const editForum = function (data) {
  return api.createCall('PATCH', '/forums' + data.forumID)
    .addHeader(store.getToken())
    .addBody(data)
    .callAjax()
}

const deleteForum = function (data) {
  return api.createCall('DELETE', '/forums' + data.forumID)
    .addHeader(store.getToken())
    .callAjax()
}

module.exports = {
  createForum,
  getForums,
  getUserForums,
  editForum,
  deleteForum
}
