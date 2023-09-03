const ProductModel = require('../Modules/Product.model.js');

const saveProduct = async ({
  clientId,
  clientUserName,
  trackNumber,
  name,
  totalAmount,
  status,
}) => {
  try {
    const newProduct = {
      clientId,
      clientUserName,
      trackNumber,
      name,
      totalAmount,
      status,
    };
    const result = await new ProductModel(newProduct).save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateProductStatus = async ({ clientId, trackNumber, status }) => {
  try {
    const clientProducts = await ProductModel.find({ clientId });
    const currentUserProduct = clientProducts.find(
      (product) => product.trackNumber === trackNumber,
    );
    const result = await ProductModel.findOneAndUpdate(
      {
        _id: currentUserProduct._id,
      },
      {
        status,
      },
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveProduct, updateProductStatus };
