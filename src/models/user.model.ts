import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Users } from '../types/Users';

type UserInfo = Omit<Users, 'id'>;

async function isUserRegistered(userInfo: string) {
  const [data] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [userInfo],
  );
  const isUserAlreadyRegistered = data.length === 1;

  return isUserAlreadyRegistered;
}

async function signInUser(userInfo: UserInfo): Promise<void> {
  const { level, password, username, vocation } = userInfo;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
}

export default {
  isUserRegistered,
  signInUser,
};