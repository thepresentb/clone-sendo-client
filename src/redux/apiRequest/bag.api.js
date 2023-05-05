import { addBag } from "../slice/bag.slice";
import { baseAxios } from "./baseAxios";

export const bagApi = {
  async getBag(dispatch, accountId) {
    const res = await baseAxios.post("bags/find_all_by_accountId", { accountId });
    if (res.data.statusCode === 200) {
      res.data.data.forEach((item) => {
        item.isChose = false;
      });
      dispatch(addBag(res.data.data));
      return null;
    }
  },

  async createBag(dispatch, info) {
    const res = await baseAxios.post("bags/create", info);
    if (res.data.statusCode === 200) {
      res.data.data.forEach((item) => {
        item.isChose = false;
      });
      dispatch(addBag(res.data.data));
      return null;
    }
  },

  async deleteBag(dispatch, info) {
    const res = await baseAxios.post("bags/delete", info);
    if (res.data.statusCode === 200) {
      res.data.data.forEach((item) => {
        item.isChose = false;
      });
      dispatch(addBag(res.data.data));
      return null;
    }
  },
};
