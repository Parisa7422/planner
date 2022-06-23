import { useState } from "react";
import { useAppContext } from "../context/appContext";
import InputGoals from "./InputGoals";

const SidebarItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getGoals, goals } = useAppContext();

  // Open sidebar item
  const handleClick = () => {
    setIsOpen(true);
    getGoals();
  };

  const filtered = goals.filter(({ title }) => {
    return title === props.name;
  });

  return (
    <div
      onClick={handleClick}
      name={props.name}
      className={`sidebar-btn sidebar-btn${isOpen && "-select"}`}
    >
      {props.title}
      {isOpen && <InputGoals title={props.name} />}
      {isOpen && (
        <div>
          <ul className="list-items">
            {filtered.map((goal) => {
              return (
                <li key={goal._id} className="list-item">
                  {goal.content}
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
