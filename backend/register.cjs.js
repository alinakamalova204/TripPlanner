const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'TravelApp',
    password: '08210122',
    port: 5432
})

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3001'
}));

app.post('/register', async (req, res) => {
    const {username, email, password } = req.body;

    try {
        const result = await pool.query('INSERT INTO Users(name, email, password) VALUES ($1, $2, $3) RETURING *', [name, email, password])
        res.json(result.rows[0])
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})
app.listen(8080, () => console.log('Server run on port 8080'))