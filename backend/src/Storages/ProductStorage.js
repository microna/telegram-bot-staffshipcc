const { Status } = require('../Components/Status.js');
const ProductModel = require('../Models/Product.model.js');
const { formatDate } = require('../utils/formatDate.js');

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
    console.log('saveProduct error');
  }
};

const updateProduct = async ({ id, status, message = '' }) => {
  try {
    const product = await ProductModel.findOneAndUpdate(
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
    console.log('updateProduct error');
  }
};

const updateProductStatus = async ({ _id, status }) => {
  try {
    const result = await ProductModel.findOneAndUpdate(
      {
        _id,
      },
      {
        status,
      },
    );
    return result;
  } catch (error) {
    console.log('updateProductStatus error');
  }
};

const updateProductTotalAmount = async ({ _id, totalAmount }) => {
  try {
    const result = await ProductModel.findOneAndUpdate(
      {
        _id,
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

const updateProductInfo = async ({ _id, info }) => {
  try {
    const result = await ProductModel.findOneAndUpdate(
      {
        _id,
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
    console.log('getProductsByStatus error');
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
    const products = await ProductModel.find();

    return products.map((product) => {
      return {
        ...product.toObject(),
        updatedAt: formatDate(product.updatedAt),
        createdAt: formatDate(product.createdAt),
      };
    });
  } catch (error) {
    console.log('err get all products');
  }
};

const userProductsByUserTGId = async ({ userTGId }) => {
  try {
    const products = await ProductModel.find({ userTGId });
    return products;
  } catch (error) {
    console.log('error userProductsByUserTGId');
  }
};

const productReadedStatus = async ({ id }) => {
  return await ProductModel.findByIdAndUpdate(
    { _id: id },
    {
      isReaded: true,
    },
  );
};

const deleteProduct = ({ id }) => {
  return ProductModel.findByIdAndRemove({ _id: id });
};

module.exports = {
  saveProduct,
  updateProductStatus,
  updateProductTotalAmount,
  updateProductInfo,
  getProductsByStatus,
  getProductById,
  getAllProducts,
  updateProduct,
  userProductsByUserTGId,
  productReadedStatus,
  deleteProduct
};
