const chai = require('chai');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { fetchDataByID } = require('./todoApi');

const expect = chai.expect;

describe('fetchDataByID', function() {
  let mock;

  beforeEach(function() {
    mock = new MockAdapter(axios);
  });

  afterEach(function() {
    mock.restore();
  });

  it('should fetch data by ID', async function() {
    const mockData = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    };

    mock.onGet('https://jsonplaceholder.typicode.com/todos/1').reply(200, mockData);

    const data = await fetchDataByID(1);
    
    expect(data).to.deep.equal(mockData);
  });

  it('should handle errors', async function() {
    mock.onGet('https://jsonplaceholder.typicode.com/todos/1').reply(500);

    try {
      await fetchDataByID(1);
    } catch (error) {
      expect(error).to.exist;
      expect(error.response.status).to.equal(500);
    }
  });
});
