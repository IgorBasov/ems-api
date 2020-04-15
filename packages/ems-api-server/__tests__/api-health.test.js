const axios = require('axios');

let config;

beforeAll(async () => {
  console.log('api-health: runs');
  config = global.config;
});

afterAll(() => {
  console.log('api-health: finished');
});

describe('api-auth: /health', () => {
  test('проверка доступности сервера', async () => {
    const response = await axios.get(`${config.ENV.URL}/health`, {
      params: { token: config.ENV.TOKEN }
    });
    expect(response.status).toEqual(200);
    expect(response.data.success).toEqual(1);
  });
});
