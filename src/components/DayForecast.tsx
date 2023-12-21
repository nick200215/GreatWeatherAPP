// import { selectWeather } from "../redux/weatherSlice";
// import { useAppSelector } from "../types/hook";
// import { WeatherType } from "../types/weatherType";

// const DayForecast = () => {
//   const { weatherForecast } = useAppSelector(selectWeather);
//   //   console.log("forecast", weatherForecast);

//   return (
//     <div>
//       <h1>3-DAY FORECAST</h1>
//       <div>
//         {weatherForecast.map((day: WeatherType) => (
//           <div className="flex justify-between">
//             <p>{day.date}</p>
//             <img src={day.day.condition.icon} alt="" />
//             <p>
//               {day.day.maxtemp_c}°/{day.day.mintemp_c}°
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DayForecast;

import { selectWeather } from "../redux/weatherSlice";
import { useAppSelector } from "../types/hook";
import { WeatherType } from "../types/weatherType";

const DayForecast = () => {
  const { weatherForecast } = useAppSelector(selectWeather);

  return (
    <div>
      <h1>3-DAY FORECAST</h1>
      <div className="pt-10 flex flex-col gap-7 ">
        {Array.isArray(weatherForecast) ? (
          weatherForecast.map((day: WeatherType) => (
            <div
              className="flex justify-between border-y-[1px] border-gray-600 py-3"
              key={day.date}
            >
              <p>{day.date}</p>
              <img src={day.day.condition.icon} alt="" />
              <p className="text-lg font-bold">
                {day.day.maxtemp_c}°/{day.day.mintemp_c}°
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
