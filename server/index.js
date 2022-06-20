const express = require('express');
const colors = require('colors')
const cors= require('cors');
const path= require('path')

require ('dotenv').config();
const {graphqlHTTP}=require('express-graphql')
const schema=require('./schema/schema')

const connectDB=require('./config/db')

const port =process.env.PORT||5000;

const app= express();

//Connect to MongoDB 
connectDB();

app.use (express.static(path.join(__dirname+'/public')) )
app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
})
);

app.listen(port,console.log(`Server running on PORT; ${port}`));