"use strict";
exports.__esModule = true;
exports.generateAuthToken = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
var jwt = require('jsonwebtoken');
var generateAuthToken = function (id) {
    var secret = process.env.SECRET;
    var bufferSecret = Buffer.from(secret, 'base64');
    var expiration = '1h';
    return jwt.sign({ id: id }, secret, { expiresIn: expiration });
};
exports.generateAuthToken = generateAuthToken;
