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

const updateProductGeneral = async ({ id, status }) => {
  try {
    const product = await ProductGeneralModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        status,
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

module.exports = {
  saveProductGeneral,
  updateProductGeneral,
  getProductsGeneralByStatus,
};
