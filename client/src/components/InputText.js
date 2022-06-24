import { useState } from "react";
import { useAppContext } from "../context/appContext";

const InputText = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const { handleChange } = useAppContext();

  const handleClick = () => {
    setExpanded(true);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <div>
      <form onSubmit={props.onAdd} className="create-goal">
        <textarea
          onChange={handleInput}
          onClick={handleClick}
          name={props.name}
          className={props.style}
          placeholder={props.placeholder}
          rows={isExpanded ? 3 : 1}
          value={props.value}
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
export default InputText;
