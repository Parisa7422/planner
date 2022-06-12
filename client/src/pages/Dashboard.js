import Wrapper from "../assets/wrappers/DashboardPage";
import Inspiration from "../components/Inspiration";
import RightSideBar from "../components/RightSideBar";
import MonthButton from "../components/MonthButton";
import Calender from "../components/Calender";

const Dashboard = () => {
  return (
    <Wrapper>
      <RightSideBar />
      <div className="center-items">
        <Inspiration />
        <MonthButton />
        <div className="flex-row">
          <Calender />
          <h2>goals picture</h2>
        </div>
      </div>
    </Wrapper>
  );
};
export default Dashboard;
