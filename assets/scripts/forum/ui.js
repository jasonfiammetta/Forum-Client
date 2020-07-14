const $allForms = $('form')
const $message = $('#forum-message')
const $forumList = $('#all-forums-list')
const forumListTemplate = require('./../templates/forum-list.handlebars')
const $postMessage = $('#post-message')
const $postArea = $('#main-forum')
const postTemplate = require('./../templates/post-template.handlebars')

const selectForum = function (title) {
  title ? $postMessage.text('Selected Forum: ' + title) : $postMessage.text('No Selected Forum')
}

const createForum = function (title) {
  // $message.text('Created a forum!')
  $allForms.trigger('reset')
  console.log('create forum title', title)
  selectForum(title)
}

// handlebars
const showForums = function (response) {
  // console.log('show forums', response)
  // if (response.forums.length > 0) {
  $forumList.html(forumListTemplate({ forums: response.forums.reverse() }))
  // } else { // can probably do this in handlebars too
  //   $forumList.html('<li class="list-group-item disabled">No forums yet.</li>')
  // }
}

const showForum = function (forumResponse) {
  $postArea.html('') // handlebars ?
  console.log('forum object', forumResponse)
  if (forumResponse.forum.posts.length > 0) {
    forumResponse.forum.posts.forEach(post => $postArea.append(postTemplate(post)))
  } else {
    $postArea.html('<li class="list-group-item disabled">No posts in this forum yet.</li>')
  }
  // $postArea.html(multiPostTemplate(forumResponse.forum.posts))
}

const deleteForum = function () {
  $allForms.trigger('reset')
  $postArea.html('')
  selectForum(null)
}

// handlebars
// const makePost = function (post) {
//   return `<li class="post"><span class="post-header">At ${new Date(post.createdAt).toTimeString().substring(0, 8)}, ${post.author ? post.author.email : 'Deleted User'} said:</span> ${post.body}</li>`
// }

const noTokenFail = function (message) {
  $message.text('No token, must be logged in to do that action.')
}

module.exports = {
  selectForum,
  createForum,
  showForums,
  showForum,
  // editForum, // ?
  deleteForum,
  noTokenFail
}
