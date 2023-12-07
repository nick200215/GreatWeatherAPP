// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Location {
//   name: string;
//   country: string;
// }
// interface CurrentWeather {
//   temp_c: number;
//   humidity: number;
//   condition: {
//     icon: string;
//   };
// }

// interface WeatherForecast {
//   forecastday: [];
// }

// interface WeatherState {
//   location: Location;
//   currentWeather: CurrentWeather;
//   weatherForecast: WeatherForecast;
// }

// const initialState: WeatherState = {
//   location: { name: "", country: "" },
//   currentWeather: { temp_c: 0, humidity: 0, condition: { icon: "" } },
//   weatherForecast: {},
// };

// const weatherSlice = createSlice({
//   name: "weather",
//   initialState,
//   reducers: {
//     setLocation: (state, action: PayloadAction<Location>) => {
//       state.location = action.payload;
//     },

//     setCurrentWeather: (state, action: PayloadAction<CurrentWeather>) => {
//       state.currentWeather = action.payload;
//     },

//     setWeatherForecast: (state, action: PayloadAction<WeatherForecast>) => {
//       state.weatherForecast = action.payload;
//     },
//   },
// });

// export const { setLocation, setCurrentWeather, setWeatherForecast } =
//   weatherSlice.actions;
// export const selectWeather = (state: { weather: WeatherState }) =>
//   state.weather;

// export const weatherReducer = weatherSlice.reducer;

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

interface ForecastHour {
  time: number;
  condition: {
    icon: string;
  };
  temp_c: number;
}

interface WeatherForecast {
  length: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  forecastday: {
    hour: ForecastHour[];
  }[];
}

interface WeatherState {
  location: Location;
  currentWeather: CurrentWeather;
  weatherForecast: WeatherForecast;
}

const initialState: WeatherState = {
  location: { name: "", country: "" },
  currentWeather: { temp_c: 0, humidity: 0, condition: { icon: "" } },
  weatherForecast: {
    forecastday: [],
    length: 0,
  },
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
