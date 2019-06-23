const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('tickets').select('id', 'username');
}

function findBy(filter) {
  return db('tickets').where(filter);
}

async function add(user) {
  const [id] = await db('tickets').insert(user);

  return findById(id);
}

function findById(id) {
  return db('tickets')
    .select('id', 'username')
    .where({ id })
    .first();
}