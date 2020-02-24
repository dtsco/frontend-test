const fakeAuth = {
  isAuthenticated: false,
  userId: null,
  authenticate(userId, cb) {
    fakeAuth.isAuthenticated = true;
    fakeAuth.userId = userId;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    fakeAuth.userId = null;
    setTimeout(cb, 100);
  }
};

export default fakeAuth;
