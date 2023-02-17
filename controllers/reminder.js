//Controlls automated reminders. Sends SMS message once per day to users with due items and reminders enabled.
const Todo = require("../models/Todo");
const Users = require("../models/User");
const cron = require("node-cron");

findTasksDue = async (user) => {
  let today = new Date(); //NOTE: Times are UTC
  const todoItems = await Todo.find({ userId: user, dueDate: { $lte: today } });
  return todoItems;
};

getReminders = async () => {
  try {
    const userList = await findUsersWithReminders();
    // let tasks = []
    for (let user in userList) {
      // tasks[user] = await findTasksDue(usersToRemind[user]._id)
      let tasks = await findTasksDue(userList[user]._id);
      if (tasks.length > 0) {
        sendReminders(userList[user].userName, userList[user].phone, tasks);
      }
    }
    // return tasks
  } catch (error) {
    console.log(error);
  }
};
