const lib = require('./lib');

const deleteOne = async (table, param) => lib[table].destroy({ where: param });

module.exports = deleteOne;