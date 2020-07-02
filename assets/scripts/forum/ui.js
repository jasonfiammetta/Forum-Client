const $allForms = $('form')
const $message = $('#forum-message')
const $forumList = $('#all-forums-list')
const $postMessage = $('#post-message')
const $postArea = $('#main-forum')

const selectForum = function (id) {
  $postMessage.text('Selected Forum: ' + id)
}

const createForum = function (response) {
  $message.text('Created a forum!')
}

const showForums = function (response) {
  console.log(response)
  $allForms.trigger('reset')
  $forumList.html('')
  response.forums.forEach(forum => {
    // console.log('append this', forum)
    $forumList.append(
      `<li class="forum-item" data-forum-id="${forum._id}">
        <p>Forum: ${forum.title}, Posted by ${forum.owner.email}</p>
      </li>`
    )
  })
}

const showForum = function (forumResponse) {
  $postArea.html('')
  console.log('forum object', forumResponse)
  forumResponse.forum.posts.forEach(post => $postArea.append(makePost(post)))
}

const makePost = function (post) {
  return `<li class="post"><span class="post-header">At [timestamp], ${post.author} said:</span> ${post.body}</li>`
}

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
