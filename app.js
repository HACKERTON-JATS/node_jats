const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
const multer = require('multer');
const upload = multer();
dotenv.config();    

const { sequelize } = require('./models');
const adminRouter = require('./routes/admin');
const campaignFileRouter = require('./routes/campaignFile');
const commentFileRouter = require('./routes/commentFile');

const app = express();

process.setMaxListeners(15);
app.set('port', process.env.PORT || 8080);

sequelize.sync({ force: false })
    .then(() => console.log('데이터 베이스 연결 성공'))
    .catch(console.error);
    
    if(process.env.NODE_ENV === 'production') {
        app.use(morgan('production'));
        app.use(helmet());
        app.use(hpp());
    } else {
        app.use(morgan('dev'));
    }

app.use(cors());;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));

app.use('/admin', adminRouter);
app.use('/campaign', campaignFileRouter);
app.use('/comment', commentFileRouter);

app.use((req, res, next) => {
    const err = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    err.status = 404;
    next(err);
});

app.listen(app.get('port'), () => {
    console.log('server on', app.get('port'));
});

module.exports = app;