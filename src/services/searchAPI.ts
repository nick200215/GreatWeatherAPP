import axios from "axios";

const options = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/search.json",
  params: { q: "<REQUIRED>" },
  headers: {
    "X-RapidAPI-Key": "1fdaf4db93msh3aa938a71e6953ep18ec6djsnc68866367d53",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
