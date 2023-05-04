// server.js
/*backend server using express and MySql  */
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Your MySQL password
    database: 'sensor_data',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.post('/api/save-data', (req, res) => {
    const data = req.body;

    const query = `
    INSERT INTO sensor_table (date, time, humidity, ph_level, nutrients, temperature)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

    connection.query(query, [
        data.date,
        data.time,
        data.humidity,
        data.ph_level,
        data.nutrients,
        data.temperature,
    ], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error saving data to the database' });
        } else {
            res.status(200).json({ message: 'Data saved successfully' });
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
