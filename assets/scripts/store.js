const store = {
  user: null,
  loggedIn: false,
  setUser: function (userResponse) {
    this.user = userResponse.user
    this.loggedIn = true
    // console.log('logged in', this.user.token)
    return userResponse // stop returning the user once the the functionality is moved into the controller
  },
  unsetUser: function () {
    this.user = null
    this.loggedIn = false
    // console.log('logged out')
    // return this.user
  },
  getToken: function () {
    if (!this.loggedIn) {
      return null
    }
    return this.user.token
  },
  getAuthor: function () {
    return this.user && this.user.email
  },

  currentForum: null,
  setForum: function (forumID) {
    this.currentForum = forumID
  },
  getForum: function () {
    return this.currentForum
  }
}

module.exports = store
