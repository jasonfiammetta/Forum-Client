const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js') // remove this eventually
const getFormFields = require('./../../../lib/get-form-fields.js')

// const handleForm = function (event) {
//   event.preventDefault()
//   return getFormFields(event.target)
// }

const onCreateForum = function (event) {
  event.preventDefault()

  if (!store.getToken()) {
    console.log('No token found')
    ui.noTokenFail()
    return
  }

  const data = getFormFields(event.target)
  data.forum.owner = store.getToken()
  console.log('create forum data', data)
  // controller.createForum(data)
  api.createForum(data)
    .then(ui.createForum)
    .catch(console.error)
}

const onShowAllForums = function (event) {
  event.preventDefault()

  api.getForums()
    .then(ui.showForums)
    .catch(console.error)
}

const onShowUserForums = function (event) {
  event.preventDefault()

  api.getUserForums() // Send user? Or client remembers user?
    .then(ui.showForum)
    .catch(console.error)
}

const onEditForum = function (event) {
  event.preventDefault()

  if (!store.getToken()) {
    console.log('No token found')
    // ui.(noTokenFail)
    return
  }
  const data = getFormFields(event)
  console.log('edit forum data', data)
  api.editForum(data)
    .then(ui.showForums)
    .catch(console.error)
}

const onDeleteForum = function (event) {
  event.preventDefault()

  if (!store.getToken()) {
    console.log('No token found')
    // ui.(noTokenFail)
    return
  }
  const data = getFormFields(event)
  console.log('delete forum data', data)
  console.log(data)
  api.deleteForum(data.forumID)
    .then(ui.deleteForum)
    .catch(console.error)
}

const onForumItem = function (event) {
  event.preventDefault()

  const id = $(event.currentTarget).data('forum-id')
  // console.log('Forum clicked, currentTarget ID: ', id)
  store.setForum(id)
  ui.selectForum(id)
}

module.exports = {
  onCreateForum,
  onShowAllForums,
  onShowUserForums,
  onEditForum,
  onDeleteForum,
  onForumItem
}
