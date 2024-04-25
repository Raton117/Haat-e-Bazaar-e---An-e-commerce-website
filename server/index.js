import express from 'express';
import db from './database/db.js';
const app = express();

db();
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});