import { selectWeather } from "../redux/weatherSlice";
import { useAppSelector } from "../types/hook";
import DateTime from "./nowDate";
const MainInfo = () => {
  const { location, currentWeather } = useAppSelector(selectWeather);

  return (
    <div className="w-full bg-white">
      <div className=" flex flex-row justify-between  bg-black">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl">
            {location.name} / {location.country}
          </h1>
          {/* <p>Country: {location.country}</p> */}
          <DateTime />
        </div>

        {/* nika */}
        <div className="w-28  ">
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
