import { AuthProvider } from "@pankod/refine-core";
import axios from "axios";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    const response = await axios.post(
      "http://localhost:3000/authentication/log-in",
      {
        email,
        password,
      }
    );

    if (response.status === 200) {
      document.cookie = response.data.cookie;
      localStorage.setItem("token", response.data.cookie);
      localStorage.setItem(
        "username",
        `${response.data.fisrtName} + ${response.data.lastName}`
      );

      return Promise.resolve();
    }
    return Promise.reject();
  },
  logout: () => {
    localStorage.removeItem("username");
    document.cookie = "Authentication=; Path=/; Max-Age=0";
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: async () => {
    localStorage.getItem("username") ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(["admin"]),
};
