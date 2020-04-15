const axios = require('axios');

let config;

beforeAll(async () => {
  console.log('root: runs');
  config = global.config;
});

afterAll(() => {
  console.log('root: finished');
});

describe('Тесты корневого маршрута API', () => {
  test('проверка доступности точки: GET /', async () => {
    const response = await axios.get(config.ENV.URL);
    expect(response.status).toEqual(200);
    expect(response.data.success).toEqual(1);
    expect(response.data.message).toEqual('done');
  });
});
