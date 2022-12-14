const Pool = require("pg").Pool;
// const config = require("./dbconfig")
require('dotenv').config()
let connectionString = process.env.DB_URI;
const pool = new Pool({ connectionString: connectionString });
pool.connect();
module.exports = pool;
