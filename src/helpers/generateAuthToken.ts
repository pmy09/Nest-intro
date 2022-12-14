// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');
import jwt_decode from 'jwt-decode';

export const generateAuthToken = (id: string) => {
  const secret = process.env.SECRET;
  const bufferSecret = Buffer.from(secret, 'base64');
  const expiration = '1h';
  return jwt.sign({ id }, secret, { expiresIn: expiration });
};
