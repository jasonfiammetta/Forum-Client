const store = {
  user: null,
  setUser: function (user) {
    this.user = user
    return this.user // stop returning the user once the the functionality is moved into the controller
  },
  getToken: function () { return this.user.token }
}

module.exports = store
