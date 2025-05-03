import axios from 'axios';

axios.defaults.baseURL = 'https://680bf4162ea307e081d2cca9.mockapi.io/';

export const fetchContactsApi = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContactApi = async (contactData) => {
  const response = await axios.post('/contacts', contactData);
  return response.data;
};

export const deleteContactApi = async (contactId) => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
};