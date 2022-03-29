const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const { sequelize } = require('./models');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.DB_PORT;

const corsOption = {
    origin: ['http://localhost:8081'],
    credential: true,
}

sequelize.sync()
    .then(() => {
        console.log("DB 연결 성공");
    })
    .catch((error) => {
        console.log("연결 실패");
        console.log(error.message);
    })

app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOption));
app.use(cookieParser());

app.use('/', routes)

app.get('/', (req, res) => {
    return res.status(200).send('Hello Node.js');
});

const server = app.listen(port, () => {
    console.log('Listening...(서버 실행중...)', port);
})

module.exports = server;