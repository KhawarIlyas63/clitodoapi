const axios = require("axios");
const BASE_URL = "https://jsonplaceholder.typicode.com/todos/";

async function fetchDataByID(id) {
  try {
    const response = await axios.get(`${BASE_URL}${id}`);
    return response.data;
  } catch (error) {
    console.error(`Couldn't get the ToDo at ${id}`);
    throw error;
  }
}

module.exports = { fetchDataByID };
