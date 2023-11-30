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

const MainPage = () => {
  const dispatch = useAppDispatch();

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
    <div className=" w-full bg-white flex justify-between gap-5">
      <div className="w-full bg-white">
        <MainInfo />
      </div>
    </div>
  );
};

export default MainPage;
