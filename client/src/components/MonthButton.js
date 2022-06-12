const MonthButton = () => {
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
        return month === getMonth() ? (
          <button key={index} className="month-btn-selected">
            {month}
          </button>
        ) : (
          <button key={index} className="month-btn">
            {month}
          </button>
        );
      })}
    </div>
  );
};
export default MonthButton;
