import axios from "axios";
const apiKey = process.env.NEXT_PUBLIC_API_KEY; //this API tocken that we got after making our data inside strapi
const apiURL = "https://backend-ecommerce-courses.onrender.com/api";
// const apiURL = "https://fakestoreapi.com";

const axiousClient = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: `Bearer ${apiKey}`, //bearer tocken
  },
});

export default axiousClient;
