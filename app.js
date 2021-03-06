const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes");
const { sequelize } = require("./models");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.DB_PORT;

const corsOption = { // CORS 설정
    origin: ["http://localhost:8081"],
    credential: true,
};

sequelize.sync()
    .then(() => {
        console.log("db 연결 성공");
    })
    .catch((err) => {
        console.log("db 연결 실패", err);
    })

app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOption));
app.use(cookieParser());


app.use("/", routes) // 라우터 관리
app.get("/", (req, res, next) => {
    return res.status(200).send({ message: "Welcome" });
});

app.use((req, res, next) => { // 없는 API 요청
    return res.status(404).send({ message: "API를 확인해주세요." });
});

app.use((err, req, res, next) => { // 에러 처리
    return res.status(err.status).send({
        message: err.message,
        data: {
            errorCode: err.errorCode
        }
    })
});

const server = app.listen(port, () => {
    console.log(`서버가 ${port}로 실행 중입니다.`);
});

module.exports = server;