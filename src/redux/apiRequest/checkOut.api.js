import { addAddressList } from "../slice/checkOut.slice";
import { baseAxios } from "./baseAxios";

export const checkOutApi = {
  async getAddress(dispatch, accountId) {
    const res = await baseAxios.post("accounts/find_address_by_accountId", { accountId });
    if (res.data.statusCode === 200) dispatch(addAddressList(res.data.data));
  },
};
