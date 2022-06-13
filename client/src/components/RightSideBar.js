import Wrapper from "../assets/wrappers/SideBar";
import SidebarItem from "./SidebarItem";

const RightSideBar = () => {
  const getMonth = () => {
    const today = new Date();
    return today.toLocaleString("en-us", { month: "long" });
  };

  const month = getMonth();
  return (
    <Wrapper>
      <div className="profile"></div>
      <div className="sidebar-items">
        <SidebarItem name={month + " goals"} />
        <SidebarItem name="books to read" />
        <SidebarItem name="movies to see" />
        <SidebarItem name="meals" />
        <SidebarItem name="sports program" />
        <SidebarItem name="skin care" />
        <SidebarItem name="learning plans" />
      </div>
    </Wrapper>
  );
};
export default RightSideBar;
