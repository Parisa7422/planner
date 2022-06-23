import Goal from "../models/Goal.js";

const addTodo = async (req, res) => {
  req.body.user_id = req.user.userId;
  const goal = await Goal.create(req.body);
  res.status(201).json({ goal });
  // res.send("add");
};

const getTodos = async (req, res) => {
  const queryObject = {
    user_id: req.user.userId,
  };

  let result = Goal.find(queryObject);
  const goals = await result;

  res.status(200).json({ goals });

  // Goal.find({ user_id: req.user.userId }, function (err, goals) {
  //   if (!err) {
  //     res.status(200).json({ goals });
  //   }
  // });
  //res.send("get todos");
};

const updateTodo = async (req, res) => {
  const { id: todoId } = req.params;
  const update = { done: true };

  const updateTodo = await Goal.findOneAndUpdate({ _id: todoId }, update, {
    new: true,
  });
  res.status(200).json({ updateTodo });
};

const deleteTodo = async (req, res) => {
  res.send("delet todo");
};

export { addTodo, getTodos, deleteTodo, updateTodo };
