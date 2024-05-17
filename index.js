const { Command } = require("commander");
const { fetchDataByID } = require("./todoApi");

const cli = new Command();

cli
  .name("CLI Interface for Todo Api")
  .description("CLI interface to fetch data from ToDo Api");

cli.action(async () => {
  try {
    // const todoPromises = [];
    for (let i = 2; i <= 40; i += 2) {
      const todo = await fetchDataByID(i);
      console.log(`Title: ${todo.title}, Completed: ${todo.completed}`);
    }
  } catch (error) {
    console.error("Couldn't Fetch Todo Data", error);
  }
});

cli.parse(process.argv);
