import { React, useState } from "react";
import "./App.css";
const api = {
  url: "https://api.openweathermap.org/data/2.5/",
  key: "2047820feb1a9a035663a774e17d6e3f",
};

function App() {
  const [Query, setQuery] = useState("");
  const [weather, setweather] = useState({});
  const search = (event) => {
    if (event.key == "Enter") {
      fetch(`${api.url}weather?q=${Query}&units=metrics&APIID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setweather(result);
          console.log(result);
        });
    }
  };
  const DateBuilder = (date) => {
    let months = [
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
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[date.getDay()];
    let Date = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${day} ${Date} ${month} ${year}`;
  };
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search....."
            onChange={(e) => setQuery(e.target.value)}
            value={Query}
            onKeyUp={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{DateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">15 c</div>
              <div className="weather">Sunny</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
