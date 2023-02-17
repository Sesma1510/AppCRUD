const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");
const { tieneAuth, esGuest } = require("../middleware/auth");
require("dotenv").config({ path: "./config/.env" });

router.get("/", tieneAuth, todosController.getTodos);

router.post("/createTodo", todosController.createTodo);

router.put("/markComplete", todosController.markComplete);

router.put("/markIncomplete", todosController.markIncomplete);

router.delete("/deleteTodo", todosController.deleteTodo);

module.exports = router;
