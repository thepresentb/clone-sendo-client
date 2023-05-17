import axios from "axios";

const headers = {
  headers: { token: `59e45dca-d874-11ed-bc91-ba0234fcde32` },
};

export const ghnApi = {
  async getProvince() {
    const res = await axios.get("https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province", headers);
    if (res.data.code === 200) return res.data.data;
  },

  async getDistrict(provinceId) {
    const res = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${provinceId}`,
      headers
    );
    if (res.data.code === 200) return res.data.data;
  },

  async getWards(districtId) {
    const res = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtId}`,
      headers
    );
    if (res.data.code === 200) return res.data.data;
  },

  async getFee(districtId, wardCode) {
    const res = await axios.post(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee`,
      {
        from_district_id: 1482,
        service_id: 53320,
        service_type_id: null,
        to_district_id: districtId,
        to_ward_code: wardCode,
        height: 50,
        length: 20,
        weight: 200,
        width: 20,
        cod_failed_amount: 2000,
        insurance_value: 10000,
        coupon: null,
      },
      headers
    );
    if (res.data.code === 200) return res.data.data;
  },
};
