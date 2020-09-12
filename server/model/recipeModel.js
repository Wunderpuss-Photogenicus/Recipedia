const { Pool } = require('pg');

const URI = 'postgres://eypzjjtz:7MIQ7fduyif1rB-YkL5cK_3y8sXVVvSl@lallah.db.elephantsql.com:5432/eypzjjtz';

const pool = new Pool({connectionString: URI});

module.exports = {
  query: (text, parameter, callback) => {
    console.log('Querying the Wunderpuss database');
    return pool.query(text, parameter, callback);
  }
};

