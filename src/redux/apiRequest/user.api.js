import { addUser } from "../slice/user.slice";
import { baseAxios } from "./baseAxios";

export const userApi = {
  async login(dispatch, userInfo) {
    const res = await baseAxios.post("accounts/login", userInfo);
    if (res.data.statusCode === 200) {
      localStorage.setItem("accessToken", "Bearer " + res.data.data.accessToken);
      dispatch(addUser(res.data.data.user));
      return null;
    }
    return res.data;
  },

  async register(dispatch, userInfo) {
    const res = await baseAxios.post("accounts/register", userInfo);
    if (res.data.statusCode === 200) {
      localStorage.setItem("accessToken", "Bearer " + res.data.data.accessToken);
      dispatch(addUser(res.data.data.user));
      return null;
    }
    return res.data;
  },

  async refresh(dispatch, accessToken) {
    const res = await baseAxios.get("accounts/refresh", {
      headers: { Authorization: accessToken },
    });
    if (res.data.statusCode === 200) {
      dispatch(addUser(res.data.data));
    }
  },
};
