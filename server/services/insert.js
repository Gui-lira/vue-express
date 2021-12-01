const lib = require('./lib');

const insert = async (table, element) => {
    const inserted = await lib[table].create(element);
    return inserted;
};

module.exports = insert;