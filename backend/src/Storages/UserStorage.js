const UserModel = require('../Models/User.model.js');

const saveUser = async ({ userId, isBot, firstName, lastName, userName, languageCode }) => {
  try {
    const newUser = {
      userId,
      isBot,
      firstName,
      lastName,
      userName,
      languageCode,
    };
    const result = await new UserModel(newUser).save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveUser };
