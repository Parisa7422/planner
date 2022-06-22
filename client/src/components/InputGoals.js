import { useState } from "react";
import { useAppContext } from "../context/appContext";

const InputGoals = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const { createGoal, content, title, handleChange } = useAppContext();

  const handleClick = () => {
    setExpanded(true);
  };

  const handleGoalInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
    console.log(props.title);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onAdd(content);
    createGoal();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="create-goal">
        <textarea
          onChange={handleGoalInput}
          onClick={handleClick}
          name="content"
          className="goals-textarea"
          placeholder="add a goal .."
          rows={isExpanded ? 3 : 1}
          value={content}
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
