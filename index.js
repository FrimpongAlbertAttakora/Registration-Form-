const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');


// Access-Control-Allow-Origin(error) Middleware
app.use(cors());



// Body Parser Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.use(express.static(path.join(__dirname, 'public'))); 



// Students API Routes
app.use('/api/students', require('./routes/api/students'));


const PORT = process.env.PORT || 2300;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
