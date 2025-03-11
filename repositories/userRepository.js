const User = require('../models/user');

class UserRepository {
  async create(userData) {
    return await User.create(userData);
  }

  async findById(id){
    return await User.findByPk(id);
  }

  async findAll(){
    return await User.findAll();
  }

  async update(id, userData){
    return await User.update(userData, { where: { id } });
  }

  async delete(id){
    return await User.destroy({ where: { id } });
  }
}

module.exports = new UserRepository();