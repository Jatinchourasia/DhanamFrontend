import { getHolidays } from "./components/api";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { yesterday, today, lastweek, lastmonth, lastyear } from "./util";
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
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(today);
  const { england, scotland, ireland } = state;

  useEffect(() => {
    getHolidays().then((data) => {
      setState({
        england: data["england-and-wales"].events,
        scotland: data.scotland.events,
        ireland: data["northern-ireland"].events,
      });
      setCountry(data["england-and-wales"].events);
      setFinalData(data["england-and-wales"].events);
    });
  }, []);

  useEffect(() => {
    setDateFilter("all");
    setFinalData(country);
  }, [country]);

  const Filter = (span) => {
    return country.filter((data) => {
      return data.date >= span && data.date <= today;
    });
  };

  let yesterdayResult = Filter(yesterday);
  let lastWeekResult = Filter(lastweek);
  let lastMonthResult = Filter(lastmonth);
  let lastYearResult = Filter(lastyear);

  const customResult = (sDate, eDate) => {
    return country.filter((data) => {
      return data.date >= sDate && data.date <= eDate;
    });
  };

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

      <select>
        <option
          onClick={() => {
            setFinalData(country);
            setDateFilter("all");
          }}
          value={dateFilter}
          selected={dateFilter === "all"}
        >
          Show All
        </option>
        <option
          onClick={() => {
            setFinalData(yesterdayResult);
            setDateFilter("yesterday");
          }}
          value={dateFilter}
        >
          yesterday
        </option>
        <option
          onClick={() => {
            setFinalData(lastWeekResult);
            setDateFilter("lastweek");
          }}
          value={dateFilter}
        >
          last week
        </option>
        <option
          onClick={() => {
            setFinalData(lastMonthResult);
            setDateFilter("lastmonth");
          }}
          value={dateFilter}
        >
          last month
        </option>{" "}
        <option
          onClick={() => {
            setFinalData(lastYearResult);
            setDateFilter("lastyear");
          }}
          value={dateFilter}
        >
          last year
        </option>{" "}
        <option
          onClick={() => {
            setDateFilter("custom");
            setFinalData([]);
            setFinalData(customResult(startDate, endDate));
          }}
          value={dateFilter}
        >
          custom Date
        </option>
      </select>
      {dateFilter === "custom" && (
        <div className="">
          <input
            type="date"
            onChange={(e) => {
              setStartDate(e.target.value);
              setFinalData(customResult(e.target.value, endDate));
            }}
            value={startDate}
          />
          <input
            type="date"
            onChange={(e) => {
              setEndDate(e.target.value);
              setFinalData(customResult(startDate, e.target.value));
            }}
            value={endDate}
          />
        </div>
      )}

      <h1>showing result for {val}</h1>

      {finalData.length === 0 ? (
        <h2>No Holidays Found</h2>
      ) : (
        finalData.map((data) => {
          return (
            <div key={uuid()} className="">
              <h3>{data.title}</h3>
              <p>{data.date}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default App;
