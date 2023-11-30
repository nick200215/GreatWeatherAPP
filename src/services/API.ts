import axios from "axios";

const options = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
  params: {
    q: "Tbilisi",
    days: "3",
    dt: "2023-11-30",
  },
  headers: {
    "X-RapidAPI-Key": "1fdaf4db93msh3aa938a71e6953ep18ec6djsnc68866367d53",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const getLocation = async () => {
  try {
    const response = await axios.request(options);
    const data = response.data;
    return Object(data.location);
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentWeather = async () => {
  try {
    const response = await axios.request(options);
    const data = response.data;
    console.log(Object(data.current));
    return Object(data.current);
  } catch (error) {
    console.error(error);
  }
};
export const getWeatherForecast = async () => {
  try {
    const response = await axios.request(options);
    const data = response.data;
    console.log(Object(data.forecast));
    return Object(data.forecast);
  } catch (error) {
    console.error(error);
  }
};
