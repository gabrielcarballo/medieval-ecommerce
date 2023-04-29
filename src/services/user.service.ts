import userModel from '../models/user.model';
import { Users } from '../types/Users';

type UserInfo = Omit<Users, 'id'>;

async function isUserRegistered(username: string) {
  const userAlreadyRegistered = await userModel.isUserRegistered(username);
  return userAlreadyRegistered;
}

async function createUser(userInfo: UserInfo) {
  const signIn = await userModel.signInUser(userInfo);
  return signIn;
}
export default {
  isUserRegistered,
  createUser,
};