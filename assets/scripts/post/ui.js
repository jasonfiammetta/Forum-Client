const $postArea = $('#main-forum') // confusing name
const $allForms = $('form')
const postTemplate = require('./../templates/post-template.handlebars')
// const $postMessage = $('#post-message')

// const selectForum = function (id) {
//   $postMessage.text('Selected Forum: ' + id)
// }

// handlebars
const showPost = function (post) {
  $allForms.trigger('reset')
  console.log('showing post!', post)
  // $postArea.append(`<li class="post"><span class="post-header">At ${new Date(post.createdAt).toTimeString().substring(0, 8)}, ${post.author} said:</span> ${post.body}</li>`)
  $postArea.append(postTemplate(post))
}

module.exports = {
  // selectForum,
  showPost
}
