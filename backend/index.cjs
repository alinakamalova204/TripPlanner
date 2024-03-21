// import express from 'express'

const express = require('express');
const cors = require('cors');
const app = express();
const { Pool } = require('pg')
const bodyParser = require('body-parser')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'TravelApp',
    password: '08210122',
    port: 5432
})
const PORT = process.env.PORT || 8080
app.use(cors({
    origin: 'http://localhost:3001'
}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/data', (req, res) => {
    const data = [
        {
            image: 'dubai.jpg',
            name: 'ОАЭ'
        },
        {
            image: 'istanbul.jpg',
            name: 'Турция'
        },
        {
            image: 'tai.webp',
            name: 'Таиланд'
        }
    ];
    res.json(data)
})
app.post('/register', async (req, res) => {
    const {name, email, password } = req.body;

    try {
        const result = await pool.query('INSERT INTO Users(name, email, password) VALUES ($1, $2, $3) RETURING *', [name, email, password])
        res.json(result.rows[0])
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})


// import express from 'express'
// import path from 'path'
//
// const __dirname = path.resolve()
// const PORT = process.env.PORT ?? 8080
// const app = express()
//
// app.use(express.static(path.resolve(__dirname, 'static')))
//
// app.get('/', (req, res) => {
//     // res.send('<h1>Hello Express!</h1>')
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })
//
//
// app.get('/features', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })
// app.get('/download', (req, res) => {
//     res.download(path.resolve(__dirname, 'static', 'index.html'))
// })
//
//
// app.listen(PORT, () => {
//     console.log(`Server has been started on port ${PORT}...`)
// })
//
// const PORT = process.env.PORT ?? 8080
// const express = require('express');
// const cors = require('cors');
// const app = express()
// app.use(cors({
//     origin: 'http://localhost:3001'
// }));

