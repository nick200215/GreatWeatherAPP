import { useState } from "react";
import axios from "axios";

const LocationSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://weatherapi-com.p.rapidapi.com/search.json",
        {
          params: { q: searchTerm },
          headers: {
            "X-RapidAPI-Key":
              "1fdaf4db93msh3aa938a71e6953ep18ec6djsnc68866367d53",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        }
      );

      setSearchResults(response.data);
      console.log("Search Result:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Trigger the search on each input change
    handleSearch();
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Enter location"
        value={searchTerm}
        onChange={handleInputChange}
        className="border p-2 mr-2 text-black"
      />
      {searchResults && (
        <div>
          <p>City Names:</p>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
