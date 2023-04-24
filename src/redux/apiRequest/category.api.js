import { baseAxios } from "../baseAxios";
import { addCategoryList } from "../slice/category.slice";

const getCategoryList = async (dispatch) => {
  const res = await baseAxios.get("categories");
  dispatch(addCategoryList(res.data.data));
};

export { getCategoryList };
