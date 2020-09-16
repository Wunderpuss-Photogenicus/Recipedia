const { Pool } = require('pg');

const URI = 'postgres://jamtwuxg:hhS81UGAqol8IYxyVCKbrdeynEVZAnL0@lallah.db.elephantsql.com:5432/jamtwuxg';

const pool = new Pool({connectionString: URI});

module.exports = {
  query: (text, parameter, callback) => {
    console.log('Querying the CatSnake database');
    return pool.query(text, parameter, callback);
  }
};

