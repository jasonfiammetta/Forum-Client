const store = {
  user: null,
  loggedIn: false,
  setUser: function (userResponse) {
    this.user = userResponse.user
    this.loggedIn = true
    return this.user // stop returning the user once the the functionality is moved into the controller
  },
  unsetUser: function () {
    this.user = null
    this.loggedIn = false
    return this.user
  },
  getToken: function () {
    if (!this.loggedIn) {
      console.log('logged out, should get unauthorized')
      return null
    }
    return this.user.token
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
