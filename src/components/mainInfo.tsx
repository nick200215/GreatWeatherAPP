import { selectWeather } from "../redux/weatherSlice";
import { useAppSelector } from "../types/hook";
import DateTime from "./nowDate";
const MainInfo = () => {
  const { location, currentWeather } = useAppSelector(selectWeather);
  // console.log(location, currentWeather);

  return (
    <div className="w-full p-1 ">
      <div className=" flex flex-row justify-between items-center ">
        <div className="flex flex-col gap-7  text-left">
          <h1 className="flex flex-col gap-2 text-4xl font-bold ">
            {location.name}
            <span className="text-2xl font-medium"> / {location.country}</span>
            <DateTime />
          </h1>
          <p className="text-5xl font-bold">
            {currentWeather.temp_c}
            <span className="w-8">°</span>
          </p>
        </div>

        <div className="w-56 ">
          <img
            src={currentWeather.condition.icon}
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
