import express from 'express';
import db from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';

const app = express();



dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

db(username,password);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

DefaultData();