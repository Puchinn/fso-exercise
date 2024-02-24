import weather from "../services/weather";
import { useEffect, useState } from "react";

function Country({ data = {} }) {
  const [weatherData, setWeatherData] = useState(null);
  const { name, capital, area, languages, flags } = data;

  useEffect(() => {
    const fetchData = async () => {
      const data = await weather.getWeather(capital[0]);
      setWeatherData(data);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [capital]);

  return (
    <div>
      <h1> {name.common}</h1>
      <p>capital {capital[0]}</p>
      <p>area {area}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(languages).map((lang) => (
          <li key={lang}> {lang} </li>
        ))}
      </ul>
      <img src={flags.png} alt={flags.alt} />
      {weatherData && (
        <div>
          <h1>Weather in {weatherData.location.name} </h1>
          <p>temperature {weatherData.current.temp_c} °c </p>
          <img src={weatherData.current.condition.icon} alt="weather icon" />
          <p>wind {weatherData.current.wind_kph} k/h</p>
        </div>
      )}
    </div>
  );
}

export { Country };
