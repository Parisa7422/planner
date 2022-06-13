import { useState } from "react";

const InputGoals = () => {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(true);
  };
  return (
    <div>
      <textarea
        onClick={handleClick}
        className="goals-textarea"
        placeholder="add new goal"
        rows={isExpanded ? 3 : 1}
      />
    </div>
  );
};
export default InputGoals;
