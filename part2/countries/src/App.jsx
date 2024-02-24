import { useEffect, useState } from "react";
import { Search } from "./components/Search";
import { Country } from "./components/Country";
import apiServices from "./services/api";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiServices.getAll();
      setData(data);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const show = (name) => {
    setSearch(name);
  };

  const filteredData = data.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const dataLength = filteredData.length;

  return (
    <div>
      <h1>Countries</h1>
      <Search inputValue={search} setInputValue={setSearch} />
      {!search && "write to search"}
      {search && dataLength > 10 && "too many results, specify another"}
      {search && dataLength === 0 && "no result"}
      {search && dataLength === 1 && <Country data={filteredData[0]} />}
      {search &&
        dataLength <= 10 &&
        dataLength > 1 &&
        filteredData.map((data) => (
          <p key={data.name.common}>
            {data.name.common}{" "}
            <button onClick={() => show(data.name.common)}>show</button>
          </p>
        ))}
    </div>
  );
}

export { App };
