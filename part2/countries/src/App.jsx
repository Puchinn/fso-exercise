import { useEffect, useState } from "react";
import { Search } from "./components/Search";
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

  const filteredData = data.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  console.log(filteredData);

  return (
    <div>
      <h1>Countries</h1>
      <Search inputValue={search} setInputValue={setSearch} />
      {!search && "write to search"}
      {search &&
        filteredData.length > 10 &&
        "too many results, specify another"}
      {search && filteredData.length === 0 && "no result"}
      {search &&
        filteredData.length <= 10 &&
        filteredData.map((data) => (
          <p key={data.name.common}>{data.name.common}</p>
        ))}
    </div>
  );
}

export { App };
