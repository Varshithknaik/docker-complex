require('dotenv').config();
const keys = require('./keys');

// Express App setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = require('pg')

const pgClient = new pool.Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

pgClient.on('connect', (client) => {
    client
        .query('CREATE TABLE IF NOT EXISTS values (number INT)')
        .catch((err) => console.log(err));
})

pgClient.on('error', () => console.log('Lost PG connection'));


app.listen('5000', () => {
    console.log('Listening on port 5000');
}) 