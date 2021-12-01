module.exports = function (sequelize, DataTypes) {
  const Offer = sequelize.define('Offer', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tax: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tariff: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    adValorem: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    float: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    iof: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentStatusSponsor: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    paymentStatusProvider: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Order',
        key: 'id',
      },
    },
    sponsorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Sponsor',
        key: 'id',
      },
    },
  }, {
    sequelize,
    tableName: 'offers',
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
        name: 'orderId',
        using: 'BTREE',
        fields: [
          { name: 'orderId' },
        ],
      },
      {
        name: 'sponsorId',
        using: 'BTREE',
        fields: [
          { name: 'sponsorId' },
        ],
      },
    ],
  });
  Offer.associate = (models) => {
    Offer.belongsTo(models.Order, { foreignKey: 'orderId' });
    Offer.belongsTo(models.Sponsor, { foreignKey: 'sponsorId' });
  };
  return Offer;
};
