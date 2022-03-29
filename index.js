const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.DB_PORT;

let corsOption = {
    origin: ['http://localhost:8081'],
    credential: true,
}

app.use(morgan('dev'));
app.use(cors(corsOption));
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log('Cookies: ', req.cookies);
    res.send('Hello Node.js');
});

app.listen(port, () => {
    console.log('Listening...(서버 실행중...)');
})