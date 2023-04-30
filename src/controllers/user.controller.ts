import { Request, Response } from 'express';
import auth from '../utils/authMiddleware';
import signIsUserValidation from '../validations/signInUserValidation';
import errorMap from '../middlewares/errorMap';
import userService from '../services/user.service';

async function signInUser(req: Request, res: Response) {
  const userInfo = req.body;

  const { type, message } = signIsUserValidation(userInfo);
  if (type) return res.status(errorMap(type)).json({ message });

  const accountAlreadyRegistered = await userService.isUserRegistered(userInfo.username);
  if (!accountAlreadyRegistered) {
    await userService.createUser(userInfo);

    return res.status(201).json({ token: auth.createToken(userInfo) });
  }

  return res.status(401).json({ message: 'User already registered' });
}

export default {
  signInUser,
};