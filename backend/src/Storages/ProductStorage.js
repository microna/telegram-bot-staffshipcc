const { Status } = require('../Components/Status.js');
const ProductModel = require('../Modules/Product.model.js');

const saveProduct = async ({
  trackNumber,
  totalAmount = 0,
  info = '',
  userTGId,
  userTGNick,
  status = Status.New,
}) => {
  try {
    const newProduct = {
      trackNumber,
      totalAmount,
      info,
      userTGId,
      userTGNick,
      status,
    };
    const result = await new ProductModel(newProduct).save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateProductStatus = async ({ _id, trackNumber, status }) => {
  try {
    const clientProducts = await ProductModel.find({ _id });
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

const updateProductTotalAmount = async ({ userTGId, trackNumber, totalAmount }) => {
  try {
    const clientProducts = await ProductModel.find({ userTGId });
    const currentUserProduct = clientProducts.find(
      (product) => product.trackNumber === trackNumber,
    );
    const result = await ProductModel.findOneAndUpdate(
      {
        _id: currentUserProduct._id,
      },
      {
        totalAmount,
      },
    );
    return result;
  } catch (erorr) {
    console.log('erorr updateProductTotalAmount');
  }
};

const updateProductInfo = async ({ userTGId, trackNumber, info }) => {
  try {
    const clientProducts = await ProductModel.find({ userTGId });
    const currentUserProduct = clientProducts.find(
      (product) => product.trackNumber === trackNumber,
    );
    const result = await ProductModel.findOneAndUpdate(
      {
        _id: currentUserProduct._id,
      },
      {
        info,
        isFilled: true,
      },
    );
    return result;
  } catch (erorr) {
    console.log('erorr updateProductInfo');
  }
};

const getProductsByStatus = async ({ status }) => {
  try {
    const products = await ProductModel.find({ status });
    return products.sort((a, b) => a.updatedAt - b.updatedAt);
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async ({ id }) => {
  try {
    const product = await ProductModel.findById({ _id: id });
    return product;
  } catch (error) {
    console.log('err getProductById');
  }
};

const getAllProducts = async () => {
  try {
    const product = await ProductModel.find();

    return product;
  } catch (error) {
    console.log('err get all products');
  }
};

module.exports = {
  saveProduct,
  updateProductStatus,
  updateProductTotalAmount,
  updateProductInfo,
  getProductsByStatus,
  getProductById,
  getAllProducts,
};
