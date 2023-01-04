require('dotenv').config();
const connectDB=require('./db/db');

connectDB(process.env.connectionstring);