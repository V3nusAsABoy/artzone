const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcryptjs')

app.use(cors({credentials:true,origin:process.env.ORIGIN}));
app.use(express.json());

mongoose.connect(process.env.MONGOURL);

