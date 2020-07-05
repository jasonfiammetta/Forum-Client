// 'use strict'

const view = require('./view.js')

const userEvents = require('./user/events.js')
const forumEvents = require('./forum/events.js')
const postEvents = require('./post/events.js')

$(() => {
  view.showLoggedOutView()
  // move to separate handler files and do userEvents = require('./user/eventHandlers.js')
  // userEvents.addHandlers()
  // User auth
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#log-in').on('submit', userEvents.onLogIn)
  $('#log-out').on('submit', userEvents.onLogOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#delete-account').on('click', userEvents.onDeleteAccount)

  // Forum CRUD
  $('#show-all-forums').on('click', forumEvents.onShowAllForums)
  forumEvents.showAllForums()

  $('#show-user-forums').on('click', forumEvents.onShowUserForums)
  $('#create-forum').on('submit', forumEvents.onCreateForum)
  $('#edit-forum').on('submit', forumEvents.onEditForum)
  $('#delete-forum').on('submit', forumEvents.onDeleteForum)

  $('#all-forums-list').on('click', '.forum-item', forumEvents.onForumItem)

  // Post CRUD
  $('#create-post').on('submit', postEvents.onCreatePost)
  $('#edit-post').on('submit', postEvents.onEditPost)
  $('#delete-post').on('click', postEvents.onDeletePost)
})
