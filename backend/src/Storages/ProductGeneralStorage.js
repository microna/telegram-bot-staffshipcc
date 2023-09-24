const ProductGeneralModel = require('../Modules/ProductGeneral.model.js');

const saveProductGeneral = async ({ productText, status, userTGId }) => {
  try {
    const newProduct = {
      productText,
      status,
      userTGId,
    };
    const result = await new ProductGeneralModel(newProduct).save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateProductGeneral = async ({ id, status, message = '' }) => {
  try {
    const product = await ProductGeneralModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        status,
        comments: message,
      },
    );
    return product;
  } catch (error) {
    console.log(error);
  }
};

const getProductsGeneralByStatus = async ({ status }) => {
  try {
    const products = await ProductGeneralModel.find({ status });
    return products.sort((a, b) => a.updatedAt - b.updatedAt);
  } catch (error) {
    console.log(error);
  }
};

const getProductGeneralById = async ({ id }) => {
  try {
    const product = await ProductGeneralModel.findById({ _id: id });
    return product;
  } catch (error) {
    console.log('err getProductById');
  }
};

const getAllProductsGeneral = async () => {
  try {
    const product = await ProductGeneralModel.find();

    return product;
  } catch (error) {
    console.log('err get all products');
  }
};

module.exports = {
  saveProductGeneral,
  updateProductGeneral,
  getProductsGeneralByStatus,
  getProductGeneralById,
  getAllProductsGeneral,
};
