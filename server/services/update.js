const lib = require('./lib');

const update = async (table, elements, params) => {
    const updated = await lib[table].update(elements, { where: params });
    return updated;
};

module.exports = update;