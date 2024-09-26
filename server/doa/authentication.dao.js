const User = require('../schemas/user.schema');

class UserDAO {
  async exists(data) {
    try {
      return await User.exists(data);
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }
  async create(data) {
    try {
      return await User.create(data);
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }
}

module.exports = new UserDAO();
