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

const getOneForum = function (id) {
  return api.createCall('GET', '/forums/' + id)
    .addHeader(store.getToken())
    .callAjax()
}

const editForum = function (data, id) {
  return api.createCall('PATCH', '/forums/' + id)
    .addHeader(store.getToken())
    .addBody(data)
    .callAjax()
}

const deleteForum = function (id) {
  return api.createCall('DELETE', '/forums/' + id)
    .addHeader(store.getToken())
    .callAjax()
}

module.exports = {
  createForum,
  getForums,
  getOneForum,
  editForum,
  deleteForum
}
