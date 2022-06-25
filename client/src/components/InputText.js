import { useState } from "react";
import { useAppContext } from "../context/appContext";

const InputText = (props) => {
  // const [isExpanded, setExpanded] = useState(false);
  const { handleChange, isExpanded, isExpand } = useAppContext();

  const handleClick = () => {
    isExpanded();
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <div>
      <form onSubmit={props.onAdd} className={props.formStyle}>
        {isExpand && (
          <input
            placeholder="Title"
            value={props.inputValue}
            style={props.visible}
            name={props.inputName}
            onChange={handleInput}
          />
        )}
        <textarea
          onChange={handleInput}
          onClick={handleClick}
          name={props.name}
          className={props.class}
          placeholder={props.placeholder}
          rows={isExpand ? 3 : 1}
          value={props.value}
        />
        {isExpand && (
          <button type="submit" className="form-btn">
            add
          </button>
        )}
      </form>
    </div>
  );
};
export default InputText;
