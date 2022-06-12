import Wrapper from "../assets/wrappers/CalenderBox";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const Calender = () => {
  return (
    <Wrapper>
      <div className="days">
        {days.map((day) => {
          return (
            <div className="day" key={day}>
              {day}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Calender;
