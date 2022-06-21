import { useState } from "react";

const InputGoals = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [goal, setGoal] = useState("");

  const handleClick = () => {
    setExpanded(true);
  };

  const handleChange = (e) => {
    setGoal(e.target.value);
  };

  const onSubmit = (e) => {
    props.onAdd(goal);
    setGoal("");
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="create-goal">
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          className="goals-textarea"
          placeholder="add a goal .."
          rows={isExpanded ? 3 : 1}
          value={goal}
        />
        {isExpanded && (
          <button type="submit" className="form-btn">
            add
          </button>
        )}
      </form>
    </div>
  );
};
export default InputGoals;
