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

  let findTodo = Goal.findOne({ _id: todoId });
  const goals = await findTodo;

  const update = { done: !goals.done };

  const updateTodo = await Goal.findOneAndUpdate({ _id: todoId }, update, {
    new: true,
  });

  // console.log(updateTodo.done);
  res.status(200).json({ updateTodo });
};

const deleteTodo = async (req, res) => {
  const { id: todoId } = req.params;
  const deleteTodo = await Goal.deleteOne({ _id: todoId });
  res.status(200).json({ deleteTodo });
};

export { addTodo, getTodos, deleteTodo, updateTodo };
