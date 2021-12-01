module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: 'email',
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    departament: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    verificationCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    emailChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    cashforceAdm: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' },
        ],
      },
      {
        name: 'email',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'email' },
        ],
      },
    ],
  });
  User.associate = (models) => {
    User.hasMany(models.Order, { foreignKey: 'userId' });
  }
};
