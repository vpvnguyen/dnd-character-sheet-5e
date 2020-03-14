import axios from "axios";

export default {
  // create character
  getChar: () => {
    return axios.get("http://localhost:3001/getChar/");
  },
  createChar: input => {
    return axios.post("http://localhost:3001/createChar/", input);
  }
};
