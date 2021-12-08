//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
export const today = `${currentYear}-${currentMonth}-${currentDay}`;
export const yesterday = `${currentYear}-${currentMonth}-${currentDay - 1}`;
export const lastweek = `${currentYear}-${currentMonth}-${currentDay - 7}`;
export const lastmonth = `${currentYear}-${currentMonth - 1}-${currentDay}`;
