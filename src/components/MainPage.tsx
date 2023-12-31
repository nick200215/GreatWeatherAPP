import { useEffect } from "react";
import {
  getCurrentWeather,
  getLocation,
  getWeatherForecast,
} from "../services/API";
import MainInfo from "./mainInfo";
import { useAppDispatch } from "../types/hook";
import {
  //   selectWeather,
  setCurrentWeather,
  setLocation,
  setWeatherForecast,
} from "../redux/weatherSlice";
import HourlyForecast from "./HourlyForecast";
import DayForecast from "./DayForecast";
import OtherInfo from "./OtherInfo";
import LocationSearch from "./Search";

const MainPage = () => {
  const dispatch = useAppDispatch();

  const handleSearch = async (searchResult) => {
    // Handle the search result as needed, for example, update the state with the result.
    console.log("Search Result:", searchResult);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationData = await getLocation();
        const currentWeatherData = await getCurrentWeather();
        const weatherForecast = await getWeatherForecast();

        dispatch(setLocation(locationData));
        dispatch(setCurrentWeather(currentWeatherData));
        dispatch(setWeatherForecast(weatherForecast));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className=" w-full flex justify-center my-8">
      <div className="w-11/12  ">
        <p className=" hidden">
          <LocationSearch onSearch={handleSearch} />
        </p>
        <div className=" flex gap-6 mt-8">
          <div className="w-3/4  flex flex-col gap-5">
            <div className="px-14">
              <MainInfo />
            </div>
            <div className="bg-weather-scondBG rounded-3xl">
              <HourlyForecast />
            </div>
            <div className="bg-weather-scondBG rounded-3xl">
              <OtherInfo />
            </div>
          </div>
          <div className=" w-1/4 font-light bg-weather-scondBG rounded-3xl p-4 ">
            <DayForecast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
