'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      // define association here
      this.hasMany(Post,{foreignKey: 'userId'})
    }
    toJSON(){
      return{ ...this.get(), id: undefined}
    }
  }
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Naam daalo bhaiya'},
        notEmpty: { msg: 'Khaali nahi jayega bhai'}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Naam daalo bhaiya'},
        notEmpty: { msg: 'Khaali nahi jayega bhai'},
        isEmail: {msg: 'valid Email daalo'}
    }},
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Naam daalo bhaiya'},
        notEmpty: { msg: 'Khaali nahi jayega bhai'}
      }
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};