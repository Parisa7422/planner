import Wrapper from "../assets/wrappers/SideBar";
import SidebarItem from "./SidebarItem";

const RightSideBar = () => {
  return (
    <Wrapper>
      <div className="profile"></div>
      <div className="sidebar-items">
        <SidebarItem name="goals" />
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
