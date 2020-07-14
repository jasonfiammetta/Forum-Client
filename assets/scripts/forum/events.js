const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js') // remove this eventually
const view = require('./../view.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

// const handleForm = function (event) {
//   event.preventDefault()
//   return getFormFields(event.target)
// }

const onCreateForum = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  data.forum.owner = store.getToken()
  // console.log('create forum data', data)
  // controller.createForum(data)
  api.createForum(data)
    .then(response => {
      store.setForum(response.forum._id)
      if (store.loggedIn) { view.showPostCrudView() }
      return response.forum.title
    })
    .then(ui.createForum)
    .then(showAllForums)
    .then(showOneForum)
    .catch(() => ui.failed('Could not create forum'))
}

const onShowAllForums = function (event) {
  event.preventDefault()

  showAllForums()
}

const showAllForums = function () {
  api.getForums()
    .then(ui.showForums)
    .catch(() => ui.failed('Could not show forums'))
}

const onShowUserForums = function (event) {
  event.preventDefault()
  api.getOneForum(store.getForum())
    .then(ui.showForum)
    .catch(() => ui.failed('Could not show forum'))
}

const onEditForum = function (event) {
  event.preventDefault()
  event.stopPropagation()

  const data = getFormFields(event.target)
  // console.log('edit forum data', data)
  api.editForum(data, event.target.id)
    .then(response => {
      // console.log('edit', response)
      // ui.editForum(response.title)
    })
    .then(showAllForums)
    .then(showOneForum)
    .catch(() => ui.failed('Could not edit forum'))
}

const onDeleteForum = function (event) {
  event.preventDefault()
  event.stopPropagation()

  // console.log('delete', event.target.id)
  api.deleteForum(event.target.id)
    .then(showAllForums)
    .then(() => {
      store.setForum(null)
      view.hidePostCrudView()
    })
    .then(ui.deleteForum)
    .catch(() => {
      store.setForum(null)
      view.hidePostCrudView()
      showAllForums()
      ui.deleteForum()
      ui.failed('Could not delete forum')
    })
}

const onForumItem = function (event) {
  event.preventDefault()

  // console.log('forum item', event)
  const id = $(event.currentTarget).data('forum-id')
  // console.log('Forum clicked, currentTarget ID: ', id)
  const name = $(event.currentTarget).data('forum-name')
  store.setForum(id)
  ui.selectForum(name)
  if (store.loggedIn) { view.showPostCrudView() }
  api.getOneForum(store.getForum())
    .then(ui.showForum)
    .catch(() => ui.failed('Could not show forum'))
}

const showOneForum = function () {
  api.getOneForum(store.getForum())
    .then(ui.showForum)
    .catch(() => ui.failed('Could not show forum'))
}

module.exports = {
  onCreateForum,
  onShowAllForums,
  showAllForums,
  onShowUserForums,
  onEditForum,
  onDeleteForum,
  onForumItem,
  showOneForum
}
