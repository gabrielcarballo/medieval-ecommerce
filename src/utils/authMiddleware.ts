import jwt, { SignOptions } from 'jsonwebtoken';
import { Users } from '../types/Users';

type Payload = Omit<Users, 'id'> & {
  // Users type without id property
};

const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '15d',
};

const secret = 'bruebiel';

function createToken(payload:Payload) {
  const token: string = jwt.sign(payload, secret, options);
  return token;
}

function verifyToken(token:string) {
  const isTokenValid = jwt.verify(token, secret);
  return isTokenValid;
}

export default {
  createToken,
  verifyToken,
};