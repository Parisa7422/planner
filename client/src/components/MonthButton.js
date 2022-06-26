const MonthButton = (props) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getMonth = () => {
    const today = new Date();
    return today.toLocaleString("en-US", { month: "long" });
  };

  return (
    <div className="month-buttons">
      {monthNames.map((month, index) => {
        return (
          <button
            onClick={() => {
              props.handleClick(month);
            }}
            key={index}
            className={
              month === getMonth() ? "month-btn-selected" : "month-btn"
            }
          >
            {month}
          </button>
        );
      })}
    </div>
  );
};
export default MonthButton;
