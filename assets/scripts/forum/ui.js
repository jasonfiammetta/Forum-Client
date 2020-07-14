const $allForms = $('form')
const $collapsables = $('.collapse-auth')
// const $message = $('#forum-message')
const $forumList = $('#all-forums-list')
const forumListTemplate = require('./../templates/forum-list.handlebars')
const $postMessage = $('#post-message')
const $postArea = $('#main-forum')
const postTemplate = require('./../templates/post-template.handlebars')

const selectForum = function (title) {
  // console.log('title', title)
  title ? $postMessage.text('Selected Forum: ' + title) : $postMessage.text('No Selected Forum')
}

const createForum = function (title) {
  // $message.text('Created a forum!')
  $allForms.trigger('reset')
  $collapsables.collapse('hide')
  // console.log('create forum title', title)
  selectForum(title)
}

// handlebars
const showForums = function (response) {
  // console.log('show forums', response)
  $forumList.html(forumListTemplate({ forums: response.forums.reverse() }))
}

const showForum = function (forumResponse) {
  $postArea.html('') // handlebars ?
  // console.log('forum object', forumResponse)
  if (forumResponse.forum.posts.length > 0) {
    forumResponse.forum.posts.forEach(post => $postArea.append(postTemplate(post)))
  } else {
    $postArea.html('<li class="list-group-item disabled">No posts in this forum yet.</li>')
  }
  // $postArea.html(multiPostTemplate(forumResponse.forum.posts))
  selectForum(forumResponse.forum.title)
}

const editForum = function (title) {
  $allForms.trigger('reset')
  $collapsables.collapse('hide')
  // selectForum(title)
}

const deleteForum = function () {
  $allForms.trigger('reset')
  $collapsables.collapse('hide')
  $postArea.html('')
  selectForum(null)
}

const failed = function (message) {

}

module.exports = {
  selectForum,
  createForum,
  showForums,
  showForum,
  editForum,
  deleteForum,
  failed
}
