import { useState } from "react";
import InputGoals from "./InputGoals";

const SidebarItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`sidebar-btn sidebar-btn${isOpen && "-select"}`}
    >
      {props.name}
      {isOpen && <InputGoals />}
    </div>
  );
};
export default SidebarItem;
