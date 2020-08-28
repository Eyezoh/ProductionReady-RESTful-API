const express = require('express');
const ProductRoute = require('./Routes/ProductsRoute');

//env variables
require('dotenv').config();
const port = process.env.PORT || 4000;

//server
const app = express();                
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})

//middleware
app.use('/api',ProductRoute);

//Routes
app.get('/',(req,res)=>{
    res.send('Hello Welcome');
})
//database


