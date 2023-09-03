const ProductModel = require('../Modules/Product.model.js');

const saveProduct = async ({ clientId, trackNumber, name, totalAmount }) => {
  try {
    const newProduct = {
      clientId,
      trackNumber,
      name,
      totalAmount,
    };
    const result = await new ProductModel(newProduct).save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// const updateProduct = () => {};

module.exports = { saveProduct };
