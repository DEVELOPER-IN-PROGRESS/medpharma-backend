const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const route = require('./routes' );

const medicineserver = express();
medicineserver.use(cors());
medicineserver.use(express.json());

medicineserver.use(route);
require('./databaseconnection');

const PORT = process.env.PORT || 5000;
medicineserver.listen(PORT, () => console.log(`Server running successfully on port ${PORT}....`));
