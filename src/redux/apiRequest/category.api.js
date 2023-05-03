import { baseAxios } from "./baseAxios";
import { addCategoryList } from "../slice/category.slice";

export const categoryApi = {
  async getCategoryList(dispatch) {
    const res = await baseAxios.get("categories");
    if (res.data.statusCode === 200) dispatch(addCategoryList(res.data.data));
  },
};
