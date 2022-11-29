"use strict";
exports.__esModule = true;
exports.hashPassword = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
var crypto = require('crypto');
// dotenv.config();
// crypto.pbkdf2Sync('password', 'secret', 1000, 64, 'sha512').toString('hex');
var hashPassword = function (password) {
    var secret = process.env.SECRET;
    return crypto
        .pbkdf2Sync(password, secret, 1000, 64, 'sha512')
        .toString('hex');
};
exports.hashPassword = hashPassword;
