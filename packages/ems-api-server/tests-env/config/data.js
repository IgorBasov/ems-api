module.exports = {
  auth: {
    signin: {
      user: {
        login: 'test@test.me',
        password: 'testPassword'
      },
      unregisteredUser: {
        login: 'dude@test.me',
        password: 'dudePassword'
      },
      userWithoutPassword: {
        login: 'dude.without.password@test.me'
      },
      userWithoutLogin: {
        password: 'somePassword'
      },
      userWithWrongLogin: {
        login: 'dude',
        password: 'dudePassword'
      },
      userWithWrongPassword: {
        login: 'test@test.me',
        password: ''
      }
    }
  }
};
