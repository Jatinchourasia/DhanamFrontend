export const getHolidays = () => {
  return fetch("https://www.gov.uk/bank-holidays.json", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
