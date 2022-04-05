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
        console.log("db 연결 성공")
    })
    .catch((err) => {
        console.log("db 연결 실패")
        console.log(err)
    })

app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOption));
app.use(cookieParser());


app.use('/', routes)
app.get('/', (req, res, next) => {
    return res.status(200).send({ message: 'Welcome' });
});
app.use((req, res, next) => {
    return res.status(404).send({ message: "API를 확인해주세요." })
})

const server = app.listen(port, () => {
    console.log(`서버가 ${port}로 실행 중입니다.`);
})

module.exports = server;