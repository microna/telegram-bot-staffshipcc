const AdminModel = require('../Modules/Admin.model');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const addAdminUser = async () => {
  try {
    const newAdmin = {
      email: 'test@test.test',
      password: '12345',
    };
    const result = await new AdminModel(newAdmin).save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const checkLogin = async (req, res) => {
  try {
    const user = await AdminModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not finded',
      });
    }

    res.json({ userData: user._doc });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'access denied  ',
      err,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await AdminModel.findOne({ email: req.body.email, password: req.body.password });

    if (!user) {
      return res.status(404).json({
        message: 'Login or Password incorrect (User not finded)',
      });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );

    const { ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'failed auth ',
      err,
    });
  }
};

module.exports = {
  addAdminUser,
  checkLogin,
  login,
};
