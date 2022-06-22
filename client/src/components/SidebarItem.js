import { useState } from "react";
import InputGoals from "./InputGoals";

const SidebarItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [goals, setGoals] = useState([]);

  // Open sidebar item
  const handleClick = (e) => {
    setIsOpen(true);
  };

  const addGoals = (newGoal) => {
    setGoals((prevGoal) => {
      return [...prevGoal, newGoal];
    });
    console.log(goals);
  };
  return (
    <div
      onClick={handleClick}
      name={props.name}
      className={`sidebar-btn sidebar-btn${isOpen && "-select"}`}
    >
      {props.title}
      {isOpen && <InputGoals onAdd={addGoals} title={props.name} />}
      {isOpen && (
        <div>
          <ul className="list-items">
            {goals.map((goal) => {
              return (
                <li key={goal} className="list-item">
                  {goal}
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
