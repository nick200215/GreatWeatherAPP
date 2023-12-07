import { selectWeather } from "../redux/weatherSlice";
import { useAppSelector } from "../types/hook";

const getCurrentHour = () => {
  const currentDateTime = new Date();
  return currentDateTime.getHours();
};

const HourlyForecast: React.FC = () => {
  const currentHour = getCurrentHour();
  const { weatherForecast } = useAppSelector(selectWeather);
  console.log("forecast", weatherForecast);
  const hourlyForecast =
    weatherForecast && weatherForecast.length > 0
      ? weatherForecast[0].hour
      : [];

  // Find the index of the current hour in the hourlyForecast array
  const currentIndex = hourlyForecast.findIndex((hour: { time: string }) => {
    const hourInArray = parseInt(hour.time.split(" ")[1].slice(0, 2), 10);
    return currentHour === hourInArray;
  });

  const startIndex = currentIndex !== -1 ? currentIndex + 1 : 0;
  const endIndex = startIndex + 6;
  let sixHourForecast = [];

  // Check if endIndex is greater than 24
  if (endIndex > 24) {
    // Display hours up to 24
    sixHourForecast = hourlyForecast.slice(startIndex, 25);
    console.log(sixHourForecast);
    // Calculate the remaining hours needed from the next day's forecast
    const remainingHours = endIndex - 24;

    // Check if there is a next day's forecast and it has enough hours
    if (
      weatherForecast.length > 1 &&
      weatherForecast[1].hour.length >= remainingHours
    ) {
      sixHourForecast = sixHourForecast.concat(
        weatherForecast[1].hour.slice(0, remainingHours)
      );
    }
  } else {
    // Display hours within the same day
    sixHourForecast = hourlyForecast.slice(startIndex, endIndex);
  }

  return (
    <div>
      <p className=" font-extralight pl-5 pt-3 box-border">6 Hour Forecast</p>
      <div className="flex justify-between flex-wrap p-8">
        {sixHourForecast.map((hour) => (
          <div
            key={hour.time}
            className="w-16  flex flex-col gap-1 justify-center text-center"
          >
            <p className="text-base">{hour.time.split(" ")[1]} </p>
            <img src={hour.condition.icon} alt="" className="" />
            <p className="text-xl font-bold">{hour.temp_c}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
