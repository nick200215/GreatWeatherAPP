// weather.ts
export interface WeatherType {
  date: string;
  day: {
    condition: {
      icon: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}
