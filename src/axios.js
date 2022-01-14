import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-my-946f2.cloudfunctions.net/api',
});

export default instance;
