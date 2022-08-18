const { Pool, Client } = require('pg');
const client = new Client({
    host: "localhost",
    user:"postgres",
    port: 5432,
    password: "123123q",
    database: "fabric"
})

client.connect();
//
// client.query('SELECT NOW()', (err, res) => {
//     // console.log("CONNECTION ESTABLISHED!!!")
//     // client.end()
// })


module.exports = client;