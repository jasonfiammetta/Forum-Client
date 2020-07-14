const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // data.post.author = store.getToken()
  data.post.forum = store.getForum()
  // console.log(data)
  api.createPost(data)
    .then(ui.showPost)
    .catch(() => {})
}

const onEditPost = function () {

}

const onDeletePost = function () {

}

module.exports = {
  onCreatePost,
  onEditPost,
  onDeletePost
}
