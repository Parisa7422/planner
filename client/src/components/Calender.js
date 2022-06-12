import Wrapper from "../assets/wrappers/CalenderBox";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const Calender = () => {
  // First day of CURRENT MONTH
  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
  }

  const date = new Date();
  const firstDayCurrentMonth = getFirstDayOfMonth(
    date.getFullYear(),
    date.getMonth()
  );

  //  Last Day of CURRENT MONTH
  function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0);
  }

  const lastDayCurrentMonth = getLastDayOfMonth(
    date.getFullYear(),
    date.getMonth()
  );
  const { day } = lastDayCurrentMonth;
  console.log(day);
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
