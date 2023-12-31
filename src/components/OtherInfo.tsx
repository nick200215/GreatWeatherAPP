import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import LensIcon from "@mui/icons-material/Lens";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { selectWeather } from "../redux/weatherSlice";
import { useAppSelector } from "../types/hook";
const OtherInfo = () => {
  const { currentWeather } = useAppSelector(selectWeather);
  const { weatherForecast } = useAppSelector(selectWeather);
  // console.log("წეაწდ", weatherForecast[0].date);
  console.log(
    "წეაწდ",
    weatherForecast && weatherForecast[0] && weatherForecast[0].date
  );

  const astro =
    weatherForecast && weatherForecast[0] && weatherForecast[0].astro;

  console.log("ასტრო", astro);

  if (!astro) {
    return null;
  }

  return (
    <div className="text-white">
      <div>
        <div>
          <h1 className=" font-bold pl-5 pt-3 box-border opacity-80 ">
            AIR CONDITION
          </h1>

          <div className="flex justify-between flex-wrap p-8">
            <div className="flex flex-col gap-3 items-center">
              <div className="flex gap-3 opacity-50">
                <DeviceThermostatIcon />
                <h3>Real Feel</h3>
              </div>
              <p className="text-3xl font-bold">
                {currentWeather.feelslike_c}°
              </p>
            </div>

            <div>
              <div className="flex flex-col gap-3 items-center">
                <div className="flex gap-3 opacity-50">
                  <AirIcon />
                  <h3>Wind</h3>
                </div>
                <p className="text-3xl font-bold">
                  {currentWeather.wind_kph} km/h
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-3 items-center">
                <div className="flex gap-3 opacity-50">
                  <WaterDropIcon />
                  <h3>Humidity</h3>
                </div>
                <p className="text-3xl font-bold ">
                  {currentWeather.humidity}%
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-3 items-center">
                <div className="flex gap-3 opacity-50">
                  <Brightness7Icon />
                  <h3>UV Index</h3>
                </div>
                <p className="text-3xl font-bold">{currentWeather.uv}</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className=" font-bold pl-5 pt-3 box-border opacity-80 ">
              ASTRO{" "}
            </h1>

            <div className="flex justify-between flex-wrap p-8">
              <div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="flex gap-3 opacity-50">
                    <WbTwilightIcon />
                    <ArrowUpwardIcon />
                    <h3>Sunrise</h3>
                  </div>
                  <p className="text-3xl font-bold">{astro.sunrise}</p>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="flex gap-2 opacity-50">
                    <WbTwilightIcon />
                    <ArrowDownwardIcon />
                    <h3>Sunset</h3>
                  </div>
                  <p className="text-3xl font-bold">{astro.sunset}</p>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="flex gap-2 opacity-50">
                    <LensIcon />
                    <ArrowUpwardIcon />
                    <h3>Moonrise</h3>
                  </div>
                  <p className="text-3xl font-bold">{astro.moonrise}</p>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="flex gap-2 opacity-50">
                    <LensIcon />
                    <ArrowDownwardIcon />
                    <h3>Moonset</h3>
                  </div>
                  <p className="text-3xl font-bold">{astro.moonset}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
