const ProductModel = require("../models/ProductModel");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductModel.find().lean().select("-_id");
    res.send(products);
  } catch (error) {
    console.error(error);
  }
};

const getSingleProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await ProductModel.find({ id: productId })
      .lean()
      .select("-_id");
    res.send(product);
  } catch (error) {
    console.error(error);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await ProductModel.distinct("category");
    res.send(categories);
  } catch (error) {
    console.error(error);
  }
};

const getAllProductsByCategory = async (req, res, next) => {
  const { category } = req.params;
  try {
    const products = await ProductModel.find({ category: category });
    res.send(products);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  getAllCategories,
  getAllProductsByCategory,
};
