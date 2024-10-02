const { default: axiousClient } = require("./axiosClient");

const postToCart = (payload) => axiousClient.post("/carts", payload);

const getFromCart = (email) =>
  axiousClient.get(
    `/carts?populate[products][populate]=*&filters[email][$eq]=${email}`
  );

const deleteFromCart = (id) => axiousClient.delete(`/carts/${id}`);

export default {
  postToCart,
  getFromCart,
  deleteFromCart,
};
