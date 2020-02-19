import axios from "axios";

const Instance = axios.create({
  baseURL: "https://react-my-burger-54614.firebaseio.com/"
});

export default Instance;
