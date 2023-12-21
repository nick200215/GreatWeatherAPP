import { selectWeather } from "../redux/weatherSlice";
import { useAppSelector } from "../types/hook";

const OtherInfo = () => {
  const { currentWeather } = useAppSelector(selectWeather);
  console.log("nmawd", currentWeather);
  return (
    <div>
      <h1 className=" font-extralight 0pl-5 pt-3 box-border">Air Condition</h1>

      <div className="flex justify-between flex-wrap p-8">
        <p>Real Feel {currentWeather.feelslike_c}</p>
        <p>Wind Speed {currentWeather.wind_kph}</p>
        <p>Humidity {currentWeather.humidity}%</p>
        <p>UV Index {currentWeather.uv}</p>
      </div>
    </div>
  );
};

export default OtherInfo;
