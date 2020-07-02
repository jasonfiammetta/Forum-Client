const $postArea = $('#main-forum') // confusing name
const $allForms = $('form')
// const $postMessage = $('#post-message')

// const selectForum = function (id) {
//   $postMessage.text('Selected Forum: ' + id)
// }

const showPost = function (post) {
  $allForms.trigger('reset')
  console.log('showing post!', post)
  $postArea.append(`<li class="post"><span class="post-header">At [timestamp], ${post.author} said:</span> ${post.body}</li>`)
}

module.exports = {
  // selectForum,
  showPost
}
