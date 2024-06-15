import axios from "axios";
import endpoints from "./endpoints";

interface Credentials {
   username: string;
   password: string;
   name: string;
}

interface Logincredentials {
   username: string;
   password: string;
}

const signup = async (credentials: Credentials) => {
   try {
      const response = await axios.post(endpoints.auth.signup, credentials);
      console.log(response.data);
   } catch (error) {
      if (axios.isAxiosError(error)) {
         console.error("Error with axios request:", error.message);
      } else {
         console.error("Unexpected error:", error);
      }
   }
};

const signin = async (credentials: Logincredentials) => {
   try {
      const response = await axios.post(endpoints.auth.signin, credentials);
      console.log(response.data);
   } catch (error) {
      if (axios.isAxiosError(error)) {
         console.error("Error with axios request:", error.message);
      } else {
         console.error("Unexpected error:", error);
      }
   }
};


export { signup, signin }
