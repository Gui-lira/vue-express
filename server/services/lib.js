const { User, Buyer, Cnpj, Offer, Orderportion, Order, Provider, Sponsor } = require('../models');

module.exports = {
    users: User,
    buyers: Buyer,
    cpnjs: Cnpj,
    offers: Offer,
    orderportions: Orderportion,
    orders: Order,
    providers: Provider,
    sponsors: Sponsor,
}