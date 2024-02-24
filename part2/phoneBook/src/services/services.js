import axios from "axios";

const url = "http://localhost:3001";

const getPersons = async () => {
  try {
    const { data } = await axios.get(`${url}/persons`);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const postPerson = async (person) => {
  try {
    const { data } = await axios.post(`${url}/persons`, person);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updatePerson = async (person) => {
  try {
    const { data } = await axios.put(`${url}/persons/${person.id}`, person);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deletePersonById = async (id) => {
  try {
    const { data } = await axios.delete(`${url}/persons/${id}`);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default { getPersons, postPerson, deletePersonById, updatePerson };
