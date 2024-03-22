import axios from "axios";

const getPersons = async () => {
  try {
    const { data } = await axios.get(`/api/persons`);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const postPerson = async (person) => {
  try {
    const { data } = await axios.post(`/api/persons`, person);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updatePerson = async (person) => {
  try {
    const { data } = await axios.put(`/api/persons/${person.id}`, person);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deletePersonById = async (id) => {
  try {
    const { data } = await axios.delete(`/api/persons/${id}`);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default { getPersons, postPerson, deletePersonById, updatePerson };
