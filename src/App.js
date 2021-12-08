import { getHolidays } from "./components/api";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { yesterday, today, lastweek, lastmonth } from "./util";
const App = () => {
  const [state, setState] = useState({
    england: [],
    scotland: [],
    ireland: [],
  });

  const [country, setCountry] = useState([]);
  const [val, setVal] = useState("england");
  const [dateFilter, setDateFilter] = useState("all");
  const [finalData, setFinalData] = useState([]);

  const { england, scotland, ireland } = state;

  useEffect(() => {
    getHolidays().then((data) => {
      setState({
        england: data["england-and-wales"].events,
        scotland: data.scotland.events,
        ireland: data["northern-ireland"].events,
      });
      setCountry(data["england-and-wales"].events);
    });
  }, []);

  let yesterdayResult = country.filter((data) => {
    return data.date >= yesterday && data.date <= today;
  });
  let lastWeekResult = country.filter((data) => {
    return data.date >= lastweek && data.date <= today;
  });
  let lastMonthResult = country.filter((data) => {
    return data.date >= lastmonth && data.date <= today;
  });

  const customResult = (startDate, endDate) => {
    return country.filter((data) => {
      return data.date >= startDate && data.date <= endDate;
    });
  };

  // console.log("customresult", customResult("2017-01-02", "2017-05-01"));

  console.log();
  return (
    <div className="App">
      <select onChange={(e) => setVal(e.target.value)} placeholder="country">
        <option onClick={() => setCountry(england)} value="england">
          england
        </option>
        <option onClick={() => setCountry(scotland)} value="scotland">
          scotland
        </option>
        <option onClick={() => setCountry(ireland)} value="ireland">
          ireland
        </option>
      </select>

      {/* //////////////////////// */}
      <select onChange={(e) => setDateFilter(e.target.value)}>
        <option onClick={() => setCountry(england)} value="all">
          Show All
        </option>{" "}
        <option onClick={() => setCountry(england)} value="yesterday">
          yesterday
        </option>{" "}
        <option onClick={() => setCountry(england)} value="last week">
          last week
        </option>{" "}
        <option onClick={() => setCountry(england)} value="last month">
          last month
        </option>{" "}
        <option onClick={() => setCountry(england)} value="custom">
          custom Date
        </option>
      </select>
      {dateFilter == "custom" && <input type="date" />}

      <h1>showing result for {val}</h1>

      {country &&
        country.map((data) => {
          return <h3 key={uuid()}>{data.title}</h3>;
        })}
    </div>
  );
};

export default App;
