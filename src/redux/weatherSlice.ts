import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Location {
  name: string;
  country: string;
}
interface CurrentWeather {
  temp_c: number;
  humidity: number;
  condition: {
    icon: string;
  };
}

interface WeatherForecast {}

interface WeatherState {
  location: Location;
  currentWeather: CurrentWeather;
  weatherForecast: WeatherForecast;
}

const initialState: WeatherState = {
  location: { name: "", country: "" },
  currentWeather: { temp_c: 0, humidity: 0, condition: { icon: "" } },
  weatherForecast: {},
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },

    setCurrentWeather: (state, action: PayloadAction<CurrentWeather>) => {
      state.currentWeather = action.payload;
    },

    setWeatherForecast: (state, action: PayloadAction<WeatherForecast>) => {
      state.weatherForecast = action.payload;
    },
  },
});

export const { setLocation, setCurrentWeather, setWeatherForecast } =
  weatherSlice.actions;
export const selectWeather = (state: { weather: WeatherState }) =>
  state.weather;

export const weatherReducer = weatherSlice.reducer;
