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
        <SidebarItem name="monthGoals" title={month + " goals"} />
        <SidebarItem name="books" title="books to read" />
        <SidebarItem name="movies" title="movies to see" />
        <SidebarItem name="learning" title="learning plans" />
      </div>
    </Wrapper>
  );
};
export default RightSideBar;
