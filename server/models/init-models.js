const { DataTypes } = require('sequelize');
const _buyers = require('./buyers');
const _cnpjs = require('./cnpjs');
const _offers = require('./offers');
const _orderportions = require('./orderportions');
const _orders = require('./orders');
const _providers = require('./providers');
const _sponsors = require('./sponsors');
const _users = require('./users');

function initModels(sequelize) {
  const buyers = _buyers(sequelize, DataTypes);
  const cnpjs = _cnpjs(sequelize, DataTypes);
  const offers = _offers(sequelize, DataTypes);
  const orderportions = _orderportions(sequelize, DataTypes);
  const orders = _orders(sequelize, DataTypes);
  const providers = _providers(sequelize, DataTypes);
  const sponsors = _sponsors(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  orders.belongsTo(buyers, { as: 'buyer', foreignKey: 'buyerId' });
  buyers.hasMany(orders, { as: 'orders', foreignKey: 'buyerId' });
  buyers.belongsTo(cnpjs, { as: 'cnpj', foreignKey: 'cnpjId' });
  cnpjs.hasMany(buyers, { as: 'buyers', foreignKey: 'cnpjId' });
  orders.belongsTo(cnpjs, { as: 'cnpj', foreignKey: 'cnpjId' });
  cnpjs.hasMany(orders, { as: 'orders', foreignKey: 'cnpjId' });
  providers.belongsTo(cnpjs, { as: 'cnpj', foreignKey: 'cnpjId' });
  cnpjs.hasMany(providers, { as: 'providers', foreignKey: 'cnpjId' });
  sponsors.belongsTo(cnpjs, { as: 'cnpj', foreignKey: 'cnpjId' });
  cnpjs.hasMany(sponsors, { as: 'sponsors', foreignKey: 'cnpjId' });
  offers.belongsTo(orders, { as: 'order', foreignKey: 'orderId' });
  orders.hasMany(offers, { as: 'offers', foreignKey: 'orderId' });
  orderportions.belongsTo(orders, { as: 'order', foreignKey: 'orderId' });
  orders.hasMany(orderportions, { as: 'orderportions', foreignKey: 'orderId' });
  orders.belongsTo(providers, { as: 'provider', foreignKey: 'providerId' });
  providers.hasMany(orders, { as: 'orders', foreignKey: 'providerId' });
  offers.belongsTo(sponsors, { as: 'sponsor', foreignKey: 'sponsorId' });
  sponsors.hasMany(offers, { as: 'offers', foreignKey: 'sponsorId' });
  orders.belongsTo(users, { as: 'user', foreignKey: 'userId' });
  users.hasMany(orders, { as: 'orders', foreignKey: 'userId' });

  return {
    buyers,
    cnpjs,
    offers,
    orderportions,
    orders,
    providers,
    sponsors,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
