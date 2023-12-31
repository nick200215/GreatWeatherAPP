import { selectWeather } from "../redux/weatherSlice";
import { useAppSelector } from "../types/hook";
import { WeatherType } from "../types/weatherType";

const DayForecast = () => {
  const { weatherForecast } = useAppSelector(selectWeather);

  return (
    <div>
      <h1 className=" font-bold opacity-80">3-DAY FORECAST</h1>
      <div className="pt-10 flex flex-col gap-7 ">
        {Array.isArray(weatherForecast) ? (
          weatherForecast.map((day: WeatherType) => (
            <div
              className="flex justify-between items-center border-y-[1px] border-gray-500 border-opacity-20 py-3"
              key={day.date}
            >
              <p>{day.date}</p>
              <img src={day.day.condition.icon} alt="" />
              <p className="text-md font-bold">
                {day.day.maxtemp_c}°{"  "}
                <span className="opacity-60">/ {day.day.mintemp_c}°</span>
              </p>
            </div>
          ))
        ) : (
          <p>No weather forecast available.</p>
        )}
      </div>
    </div>
  );
};

export default DayForecast;
