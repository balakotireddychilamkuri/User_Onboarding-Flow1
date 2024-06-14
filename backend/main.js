const express = require('express');
const router = express.Router();
const connection = require('./connector');

// Route to handle POST requests containing data
router.post('/store-data', (req, res) => {
    const newData = {
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        state: req.body.state,
        email: req.body.email
    };
    const query = 'INSERT INTO usersdata SET ?';  // replace 'your_table' with your actual table name

    connection.query(query, newData, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error storing data');
            return;
        }
        res.status(200).send('Data stored successfully');
    });
});

// Route to retrieve stored data
router.get('/data', (req, res) => {
    const query = 'SELECT * FROM usersdata';  // replace 'your_table' with your actual table name

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving data:', err);
            res.status(500).send('Error retrieving data');
            return;
        }
        res.json(results);
    });
});

module.exports = router;
