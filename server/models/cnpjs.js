module.exports = function (sequelize, DataTypes) {
  const Cnpj = sequelize.define('Cnpj', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cnpj: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: 'cnpj',
    },
    companyType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'cnpjs',
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
        name: 'cnpj',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'cnpj' },
        ],
      },
    ],
  });
  Cnpj.associate = (models) => {
    Cnpj.hasMany(models.Buyer, { foreignKey: 'cnpjId'});
    Cnpj.hasMany(models.Provider, { foreignKey: 'cnpjId'});
    Cnpj.hasOne(models.Sponsor, {  foreignKey: 'cnpjId' })
  };
  return Cnpj;
};
