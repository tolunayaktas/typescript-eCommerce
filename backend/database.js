const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "products",
    password: "12345",
    port: 5433,
})

module.exports = pool