import axios from "axios";

const url = "http://localhost:3001";

const getPersons = async () => {
  const { data } = await axios.get(url + "/persons");
  return data;
};

const postPerson = async (person) => {
  const { data } = await axios.post(url + "/persons", person);
  return data;
};

const deletePersonById = async (id) => {
  const { data } = await axios.delete(url + "/persons/" + id);
  return data;
};

export default { getPersons, postPerson, deletePersonById };
