import express from "express";
const router = express.Router();

import {
  getTodos,
  addTodo,
  deleteTodo,
} from "../controllers/GoalController.js";

router.route("/todos").get(getTodos);
router.route("/add-todo").post(addTodo);
router.route("/delete-todo").patch(deleteTodo);

export default router;
