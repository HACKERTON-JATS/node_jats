const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');

const login = async(req, res) => {
    const codes = req.body.code;
    try {
        const compare = await Admin.findOne({
            where: { code: codes },
        });
        if(!compare) {
            return res.status(401).json({
                code: 401,
                message: "코드가 일치하지 않습니다",
            });
        }
        const token = jwt.sign({
            code: Admin.code,
        }, process.env.JWT_SECRET, {
            expiresIn: '2weeks',
            issuer: "JATS",
        });
        res.status(201).json({
            code: 201,
            message: "토큰이 발급되었습니다",
            authorization: token
        });
    } catch(error) {
        console.error(error);
        return error;
    }
};

const logout = function(req, res) {
    res.status(204);
    res.end();
};

module.exports = {
    login,
    logout
};