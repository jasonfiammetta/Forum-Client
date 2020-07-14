// 'use strict'

const view = require('./view.js')

const userEvents = require('./user/events.js')
const forumEvents = require('./forum/events.js')
const postEvents = require('./post/events.js')

$(() => {
  view.showLoggedOutView()
  view.hidePostCrudView()
  forumEvents.showAllForums()
  // move to separate handler files and do userEvents = require('./user/eventHandlers.js')
  // userEvents.addHandlers()
  // User auth
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#log-in').on('submit', userEvents.onLogIn)
  $('#log-out').on('click', userEvents.onLogOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#delete-account').on('click', userEvents.onDeleteAccount)

  // Forum CRUD
  $('#show-all-forums').on('click', forumEvents.onShowAllForums)
  forumEvents.showAllForums()

  $('#show-user-forums').on('click', forumEvents.onShowUserForums)
  $('#create-forum').on('submit', forumEvents.onCreateForum)

  $('#all-forums-list').on('click', '.forum-item', forumEvents.onForumItem)
  $('#all-forums-list').on('submit', '.edit-forum', forumEvents.onEditForum)
  $('#all-forums-list').on('click', '.delete-forum', forumEvents.onDeleteForum)

  // Post CRUD
  $('#create-post').on('submit', postEvents.onCreatePost)
})
