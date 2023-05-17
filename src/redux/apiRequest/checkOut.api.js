import { addAddressList } from "../slice/checkOut.slice";
import { baseAxios } from "./baseAxios";

export const checkOutApi = {
  async getAddress(dispatch, accountId) {
    const res = await baseAxios.post("accounts/find_address_by_accountId", { accountId });
    if (res.data.statusCode === 200) dispatch(addAddressList(res.data.data));
  },

  async createAddress(dispatch, addressInfo) {
    const res = await baseAxios.post("accounts/create_address", addressInfo);
    if (res.data.statusCode === 200) dispatch(addAddressList(res.data.data));
  },

  async editAddress(dispatch, addressInfo) {
    const res = await baseAxios.post("accounts/edit_address", addressInfo);
    if (res.data.statusCode === 200) dispatch(addAddressList(res.data.data));
  },
};
