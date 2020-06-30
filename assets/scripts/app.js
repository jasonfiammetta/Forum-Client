// 'use strict'

const userEvents = require('./user/events.js')
const forumEvents = require('./forum/events.js')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#log-in').on('submit', userEvents.onLogIn)
  $('#log-out').on('click', userEvents.onLogOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#delete-account').on('click', userEvents.onDeleteAccount)

  $('#show-user-forum-list').on('click', forumEvents.onShowForumList)
  $('#create-forum').on('submit', forumEvents.onCreateForum)
  $('#create-post').on('submit', forumEvents.onCreatePost)
  $('#edit-post').on('submit', forumEvents.onEditPost)
  $('#delete-post').on('click', forumEvents.onDeletePost)
})
