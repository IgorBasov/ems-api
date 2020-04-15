const axios = require('axios');

let config;
let data;
let token;

beforeAll(async () => {
  console.log('api-auth: runs');
  config = global.config;
  data = config.data.auth;
});

afterAll(() => {
  console.log('api-auth: finished');
});

describe('api-auth: api/v1.0/auth/signin', () => {
  test('возможность входа в систему', async () => {
    let response;
    try {
      response = await axios.post(
        `${config.ENV.URL}/api/v1.0/auth/signin`,
        data.signin.user
      );
      token = response.data.data.token || token;
    } catch (error) {
      response = prepareError(error);
    }
    expect(response.status).toEqual(200);
    expect(response.data.success).toEqual(1);
  });
  test('получение ошибки 403 при введении некорректных данных (незарегистрированный пользователь)', async () => {
    let response;
    try {
      response = await axios.post(
        `${config.ENV.URL}/api/v1.0/auth/signin`,
        data.signin.unregisteredUser
      );
    } catch (error) {
      response = prepareError(error);
    }
    expect(response.status).toEqual(403);
    expect(response.data.success).toEqual(0);
  });
  test('получение ошибки 400 при отсутствии пароля', async () => {
    let response;
    try {
      response = await axios.post(
        `${config.ENV.URL}/api/v1.0/auth/signin`,
        data.signin.userWithoutPassword
      );
    } catch (error) {
      response = prepareError(error);
    }
    expect(response.status).toEqual(400);
    expect(response.data.success).toEqual(0);
  });
  test('получение ошибки 400 при отсутствии логина', async () => {
    let response;
    try {
      response = await axios.post(
        `${config.ENV.URL}/api/v1.0/auth/signin`,
        data.signin.userWithoutLogin
      );
    } catch (error) {
      response = prepareError(error);
    }
    expect(response.status).toEqual(400);
    expect(response.data.success).toEqual(0);
  });
  test('получение ошибки 400 при несоответствии логина формату (email)', async () => {
    let response;
    try {
      response = await axios.post(
        `${config.ENV.URL}/api/v1.0/auth/signin`,
        data.signin.userWithWrongLogin
      );
    } catch (error) {
      response = prepareError(error);
    }
    expect(response.status).toEqual(400);
    expect(response.data.success).toEqual(0);
  });
  test('получение ошибки 400 при несоответствии пароля формату (длина)', async () => {
    let response;
    try {
      response = await axios.post(
        `${config.ENV.URL}/api/v1.0/auth/signin`,
        data.signin.userWithWrongPassword
      );
    } catch (error) {
      response = prepareError(error);
    }
    expect(response.status).toEqual(400);
    expect(response.data.success).toEqual(0);
  });
});

describe('api-auth: api/v1.0/auth/whoami', () => {
  test('возможность запросить информацию о пользователе', async () => {
    let response;
    try {
      response = await axios.get(`${config.ENV.URL}/api/v1.0/auth/whoami`, {
        headers: {
          Cookie: `token=${token}`
        }
      });
    } catch (error) {
      response = prepareError(error);
    }
    expect(response.status).toEqual(200);
    expect(response.data.success).toEqual(1);
    expect(response.data.data.login).toEqual(data.signin.user.login);
  });
});

describe('api-auth: api/v1.0/auth/signout', () => {
  test('возможность выхода из системы: POST /api/v1.0/auth/signout', async () => {
    let response;
    try {
      response = await axios.post(`${config.ENV.URL}/api/v1.0/auth/signout`, {
        headers: {
          Cookie: `token=${token}`
        }
      });
    } catch (error) {
      response = prepareError(error);
    }
    expect(response.status).toEqual(200);
    expect(response.data.success).toEqual(1);
  });
});

function prepareError(error) {
  return (
    error.response || {
      status: 500,
      data: { data: { success: 0 } }
    }
  );
}
