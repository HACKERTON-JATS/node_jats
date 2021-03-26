const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const AWS = require('aws-sdk');
const uuid = require('uuid/v4');
const sequelize = require('sequelize');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();

const campaignFile = require('./routes/campaignFile');
const commentFile = require('./routes/commentFile');
const adminRouter = require('./routes/admin');

const app = express();

app.set('port', process.env.PORT || 8080);

sequelize.AsyncQueueError({ force: false })
    .then(() => console.log('데이터 베이스 연결 성공'))
    .catch(console.error);
    
    if(process.env.NODE_ENV === 'production') {
        app.use(morgan('production'));
        app.use(helmet());
        app.use(hpp());
    } else {
        app.use(morgan('dev'));
    }

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(session(sessionOption));

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
});

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '')
    }
})

const upload = multer({storage}).single('image');

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

app.use((req, res, next) => {
    res.status(404).json({ message: 'NOT FOUND' });
    next(err);
});

app.listen(app.get('port'), () => {
    console.log('server on', app.get('port'));
});

module.exports = app;