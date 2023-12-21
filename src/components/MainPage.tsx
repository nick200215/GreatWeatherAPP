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
    <div className=" w-full flex justify-center mt-8">
      <div className="w-11/12  ">
        <p className="bg-yellow-500 hidden">Searchh</p>
        <div className=" flex gap-6 mt-8">
          <div className="w-3/4  flex flex-col gap-7">
            <div className="">
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
  // return (
  //   <div className=" w-full  flex justify-between gap-5 ">

  //     <div className="w-full flex bg-slate-800">
  //       <div className="bg-slate-600">
  //         <div className="w-3/4 ">
  //           <MainInfo />
  //         </div>
  //         <div className="w-3/6 bg-weather-scondBG">Todey forecast</div>
  //         <div>Air Conditions</div>
  //       </div>
  //       <div className="bg-slate-700">3 Days forecast</div>
  //     </div>
  //   </div>
  // );
};

export default MainPage;
