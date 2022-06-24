import { useState } from "react";
import { useAppContext } from "../context/appContext";
import InputText from "./InputText";

const SidebarItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    getGoals,
    goals,
    updateGoal,
    deleteGoal,
    createGoal,
    clearValues,
    content,
  } = useAppContext();

  // Open sidebar item
  const handleClick = () => {
    setIsOpen(true);
    getGoals();
  };

  const filtered = goals.filter(({ title }) => {
    return title === props.name;
  });

  const handleEdit = (id) => {
    updateGoal(id);
  };

  const handleDelete = (id) => {
    deleteGoal(id);
  };

  // create Goal
  const onSubmit = (e) => {
    e.preventDefault();
    const title = props.name;
    createGoal({ title });
    clearValues();
  };

  return (
    <div
      onClick={handleClick}
      name={props.name}
      className={`sidebar-btn sidebar-btn${isOpen && "-select"}`}
    >
      {props.title}
      {isOpen && (
        <InputText
          placeholder="Add a goal ..."
          onAdd={onSubmit}
          name="content"
          value={content}
          class="goals-textarea"
          formStyle="create-goal"
          visible={{ display: "none" }}
        />
      )}
      {isOpen && (
        <div>
          <ul className="list-items">
            {filtered.map((goal) => {
              return (
                <li
                  key={goal._id}
                  className="list-item"
                  style={{
                    textDecoration: goal.done ? "line-through" : "none",
                  }}
                  onClick={() => {
                    handleEdit(goal._id);
                  }}
                >
                  {goal.content}
                  <button
                    onClick={() => {
                      handleDelete(goal._id);
                    }}
                  >
                    d
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {isOpen && (
        <button
          onMouseDown={() => {
            setIsOpen(false);
            clearValues();
          }}
          className="close-btn"
        >
          C
        </button>
      )}
    </div>
  );
};
export default SidebarItem;
