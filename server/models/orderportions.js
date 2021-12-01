module.exports = function(sequelize, DataTypes) {
  const Orderportion = sequelize.define('Orderportion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nDup: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dVenc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vDup: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    availableToMarket: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Order',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'orderportions',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "orderId",
        using: "BTREE",
        fields: [
          { name: "orderId" },
        ]
      },
    ]
  });
  Orderportion.associate = (models) => {
    Orderportion.belongsTo(models.Order, { foreignKey: 'orderId' });
  };
  return Orderportion;
};
