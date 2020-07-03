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
    .then(showAllForums)
    .catch(console.error)
}

const onShowAllForums = function (event) {
  event.preventDefault()

  showAllForums()
}

const showAllForums = function () {
  api.getForums()
    .then(ui.showForums)
    .catch(console.error)
}

const onShowUserForums = function (event) {
  event.preventDefault()

  api.getOneForum(store.getForum())
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
    .then(showAllForums)
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
    .then(showAllForums)
    .catch(console.error)
}

const onForumItem = function (event) {
  event.preventDefault()

  const id = $(event.currentTarget).data('forum-id')
  // console.log('Forum clicked, currentTarget ID: ', id)
  const name = $(event.currentTarget).data('forum-name')
  store.setForum(id)
  ui.selectForum(name)
  api.getOneForum(store.getForum())
    .then(ui.showForum)
    .catch(console.error)
}

module.exports = {
  onCreateForum,
  onShowAllForums,
  showAllForums,
  onShowUserForums,
  onEditForum,
  onDeleteForum,
  onForumItem
}
