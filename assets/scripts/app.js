// 'use strict'

const userEvents = require('./user/events.js')
const forumEvents = require('./forum/events.js')

$(() => {
  // User auth
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#log-in').on('submit', userEvents.onLogIn)
  $('#log-out').on('click', userEvents.onLogOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#delete-account').on('click', userEvents.onDeleteAccount)

  // Forum CRUD
  $('#show-all-forums').on('click', forumEvents.onShowForumList)
  $('#show-user-forums').on('click', forumEvents.onShowForum)
  $('#create-forum').on('submit', forumEvents.onCreateForum)
  $('#create-post').on('submit', forumEvents.onCreatePost)
  $('#edit-post').on('submit', forumEvents.onEditPost)
  $('#delete-post').on('click', forumEvents.onDeletePost)
})
