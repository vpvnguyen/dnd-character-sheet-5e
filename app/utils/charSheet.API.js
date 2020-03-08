import axios from "axios";

export default {
  // create character
  createChar: input => {
    return axios.post("http://localhost:3001/createChar/", input);
  }
};
