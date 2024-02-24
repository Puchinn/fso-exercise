import axios from "axios";
// eslint-disable-next-line no-undef
const apiKey = import.meta.env.VITE_API_KEY;
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}`;

async function getWeather(capital) {
  try {
    const { data } = await axios.get(`${url}&q=${capital}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default { getWeather };
