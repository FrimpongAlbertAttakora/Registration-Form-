const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv/config');

// Access-Control-Allow-Origin(error) Middleware
app.use(cors());

// Body Parser Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Serving static folder
app.use(express.static(path.join(__dirname, 'public'))); 

// Students API Routes
app.use('/api/students', require('./routes/students'));

// Connect to DB
mongoose.connect( 
    process.env.DB_CONNECTION, 
    {  useNewUrlParser: true ,
       useUnifiedTopology: true, 
    },
    () => console.log('Connected to DB')
);


const PORT = process.env.PORT || 2100;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

