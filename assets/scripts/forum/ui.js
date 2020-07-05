const $allForms = $('form')
const $message = $('#forum-message')
const $forumList = $('#all-forums-list')
const forumListTemplate = require('./../templates/forum-list.handlebars')
const $postMessage = $('#post-message')
const $postArea = $('#main-forum')
const postTemplate = require('./../templates/post-template.handlebars')

const selectForum = function (title) {
  $postMessage.text('Selected Forum: ' + title)
}

const createForum = function (title) {
  $message.text('Created a forum!')
  $allForms.trigger('reset')
  console.log('create forum title', title)
  selectForum(title)
}

// handlebars
const showForums = function (response) {
  console.log(response)
  // $allForms.trigger('reset') // necessary anymore?
  $forumList.html(forumListTemplate({ forums: response.forums }))
}

const showForum = function (forumResponse) {
  $postArea.html('') // handlebars ?
  console.log('forum object', forumResponse)
  // forumResponse.forum.posts.forEach(post => $postArea.append(makePost(post)))
  forumResponse.forum.posts.forEach(post => $postArea.append(postTemplate(post)))
  // $postArea.html(multiPostTemplate(forumResponse.forum.posts))
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
  // deleteForum, // ?
  noTokenFail
}
