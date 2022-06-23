import Goal from "../models/Goal.js";

const addTodo = async (req, res) => {
  req.body.user_id = req.user.userId;
  const goal = await Goal.create(req.body);
  res.status(201).json({ goal });
  // res.send("add");
};

const getTodos = async (req, res) => {
  res.send("get todos");
};

const deleteTodo = async (req, res) => {
  res.send("delet todo");
};

export { addTodo, getTodos, deleteTodo };
