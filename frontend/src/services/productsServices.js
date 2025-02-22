import axios from "axios";

class ProductsServices {
  // static getAllProducts = (category) => {
  //   if (category) {
  //     if (category === "All Products") {
  //       return axios.get("/products");
  //     } else {
  //       return axios.get("/products/category/" + category);
  //     }
  //   } else {
  //     return axios.get("/products");
  //   }
  // };
  static getAllProducts = () => axios.get("/products");
  static getSingleProduct = (productId) => axios.get("/products/" + productId);
  static getAllCategories = () => axios.get("/products/categories");
}

export default ProductsServices;
