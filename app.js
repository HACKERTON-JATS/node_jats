const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();    

const sequelize = require('./models');
const adminRouter = require('./routes/admin');
const fileRouter = require('./routes/user');

const app = express();

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

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(session(sessionOption));

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
app.use('/campaign', fileRouter);
app.use('/comment', fileRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: 'NOT FOUND' });
    next(err);
});

app.listen(app.get('port'), () => {
    console.log('server on', app.get('port'));
});

module.exports = app;