import axios from "axios";

class UserServices {
  static registerUser = (user) =>
    axios.post("/auth/register", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

  static loginUser = (user) =>
    axios.post("/auth/login", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
}

export default UserServices;
