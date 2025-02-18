import axios from "axios";

class ProductsServices {
  static getAllProducts = () => axios.get();
  static getAllCategories = () => axios.get();
}

export default ProductsServices;
