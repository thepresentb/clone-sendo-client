import { addBag } from "../slice/bag.slice";
import { baseAxios } from "./baseAxios";

export const bagApi = {
  async getBag(dispatch, accountId) {
    const res = await baseAxios.post("bags/find_all_by_accountId", { accountId });
    if (res.data.statusCode === 200) {
      dispatch(addBag(res.data.data));
      return null;
    }
  },
};
