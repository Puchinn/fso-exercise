import axios from "axios";

const url = "https://studies.cs.helsinki.fi/restcountries/api";

async function findByName(name) {
  try {
    const { data } = await axios.get(`${url}/name/${name}`);
    return data;
  } catch (error) {
    throw new Error("error to try fetch data");
  }
}

async function getAll() {
  try {
    const { data } = await axios.get(`${url}/all`);
    return data;
  } catch (error) {
    throw new Error("error to try fetch data");
  }
}

export default { findByName, getAll };
