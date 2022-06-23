import { useState } from "react";
import { useAppContext } from "../context/appContext";

const InputGoals = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const { createGoal, content, handleChange, clearValues } = useAppContext();

  const handleClick = () => {
    setExpanded(true);
  };

  const handleGoalInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const title = props.title;
    createGoal({ title });
    clearValues();
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
