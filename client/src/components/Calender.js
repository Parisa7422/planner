import Wrapper from "../assets/wrappers/CalenderBox";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const Calender = () => {
  //First day of CURRENT MONTH
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

  // get first day of the month as a string
  // get number of days in per month as a number
  const startTheWeek = String(firstDayCurrentMonth).slice(0, 3);
  const daysOftheMonth = String(lastDayCurrentMonth).slice(8, 10);
  const numberOfDays = parseInt(daysOftheMonth);

  console.log("first day of week " + startTheWeek);
  console.log("days of the month " + numberOfDays);

  // Create the arry
  const createArray = () => {
    const array = [];
    for (let i = 1; i <= numberOfDays; i++) {
      array.push(i);
    }
    return array;
  };
  const monthArray = createArray();

  // get Today date
  const today = new Date().getDate();
  console.log(today);
  return (
    <Wrapper>
      {days.map((day) => {
        return (
          <div className="day" key={day}>
            {day}
          </div>
        );
      })}
      <div style={{ gridColumnStart: days.indexOf(startTheWeek) }}></div>
      {monthArray.map((month, index) => {
        return (
          <div
            key={month}
            className={index + 1 === today ? "days select" : "days"}
          >
            {month}
          </div>
        );
      })}
    </Wrapper>
  );
};
export default Calender;
