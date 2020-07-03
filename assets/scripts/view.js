
const loggedOutView = {
  // elements: [$('#sign-up'), $('#log-in')],
  elements: [$('.logged-out-view')],
  hide: function () {
    this.elements.forEach(e => e.hide())
  },
  show: function () {
    // loggedInView.hide()
    // forumCrud.hide()
    this.elements.forEach(e => e.show())
  }
}

const loggedInView = {
  // elements: [$('#change-password'), $('#log-out'), $('delete-account')],
  elements: [$('.logged-in-view')],
  hide: function () {
    this.elements.forEach(e => e.hide())
  },
  show: function () {
    // loggedOutView.hide()
    this.elements.forEach(e => e.show())
  }
}

const forumCrud = {
  // elements: [$('#create-forum'), $('#edit-forum'), $('#delete-forum')],
  elements: [$('.forum-crud-view'), $('.post-crud-view')],
  hide: function () {
    this.elements.forEach(e => e.hide())
  },
  show: function () {
    this.elements.forEach(e => e.show())
  }
}

const showLoggedOutView = function () {
  loggedInView.hide()
  forumCrud.hide()
  loggedOutView.show()
}

const showLoggedInView = function () {
  loggedOutView.hide()
  loggedInView.show()
  forumCrud.show()
}

module.exports = {
  showLoggedInView,
  showLoggedOutView
}
