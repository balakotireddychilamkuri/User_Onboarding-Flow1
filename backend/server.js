// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express.Router();


// // Middleware to parse JSON bodies
// app.use(bodyParser.json());
// app.use(cors());

// // const router = express.Router();

// module.exports = app;


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Import routes from remote.js
const remoteRoutes = require('./main');
app.use(remoteRoutes);

// Start the server
const PORT = 3500;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
