const $allForms = $('form')
const $message = $('#forum-message')
const $forumList = $('#all-forums-list')
const $postMessage = $('#post-message')
const $postArea = $('#main-forum')

const selectForum = function (title) {
  $postMessage.text('Selected Forum: ' + title)
}

const createForum = function (response) {
  $message.text('Created a forum!')
}

// handlebars
const showForums = function (response) {
  console.log(response)
  $allForms.trigger('reset')
  $forumList.html('')
  response.forums.forEach(forum => {
    // console.log('append this', forum)
    $forumList.append(
      `<li class="forum-item" data-forum-id="${forum._id}" data-forum-name="${forum.title}">
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

// handlebars
const makePost = function (post) {
  return `<li class="post"><span class="post-header">At ${new Date(post.createdAt).toTimeString().substring(0, 8)}, ${post.author ? post.author.email : 'Deleted User'} said:</span> ${post.body}</li>`
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
