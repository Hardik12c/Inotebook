require('dotenv').config();
const express=require('express');
const connectDB=require('./db/db');

const app=express();

app.use(express.json());



connectDB(process.env.connectionstring);