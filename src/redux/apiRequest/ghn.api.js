import axios from "axios";

export const ghnApi = {
  async getProvince() {
    const res = await axios.get("https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province", {
      headers: { token: `59e45dca-d874-11ed-bc91-ba0234fcde32` },
    });
    if (res.data.code === 200) return res.data.data;
  },

  async getDistrict(provinceId) {
    const res = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${provinceId}`,
      {
        headers: { token: `59e45dca-d874-11ed-bc91-ba0234fcde32` },
      }
    );
    if (res.data.code === 200) return res.data.data;
  },

  async getWards(districtId) {
    const res = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtId}`,
      {
        headers: { token: `59e45dca-d874-11ed-bc91-ba0234fcde32` },
      }
    );
    if (res.data.code === 200) return res.data.data;
  },
};
