const { default: axiousClient } = require("./axiosClient");

export const getLatestProducts = () => axiousClient.get("/products?populate=*");
export const getAProduct = (id) =>
  axiousClient.get(`/products/${id}?populate=*`);
export const getSimilarProducts = (category) =>
  // axiousClient.get(`/products?filters[category][$eq]=${category}&populate=*`); //filtering
  axiousClient.get(`/products?filters[category][$eq]=${category}&populate=*`); //filtering

export default {
  getLatestProducts,
  getAProduct,
  getSimilarProducts,
};

/*
after opening localhost:1337 try this below link
http://localhost:1337/api/products?filters[category][$eq]=TECH&populate=*
read starpi API and go to filters based on condition it filter
*/
