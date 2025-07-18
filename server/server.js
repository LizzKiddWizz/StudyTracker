const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const validateJWTToken = require('./middleware/validateJWTToken');
const cookieParser = require('cookie-parser');
const PORT = process.env.port || 5000;

//CORS: cross origin resource sharing
app.use(cors(corsOptions));

//built-in middleare to handle url encoded data aka, form data:
//'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json, supplied to all routes as it comes in
app.use(express.json());

//middleware for cookies
app.use(cookieParser())

//testing, was able to get this onto the react front
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh')); //refresh token might not be needed
app.use('/logout', require('./routes/logout')); //refresh token might not be needed

//need a valid session and JWT Token for all routes below
app.use(validateJWTToken)
app.use('/students', require('./routes/api/students'))

//backend server running on port 5000, client server (REACT) will be running on port 3000
app.listen(PORT, () => { console.log(`Server from server.js running on port 5000`) })