import type { User, Uuid } from '../types/user.ts';
import { v4 } from '../../deps.ts';

const users = [
  {
    uuid: '100ea9db-4021-4b20-98a5-01ca5a8254e7',
    name: 'Franco',
    birthDate: new Date(),
  },
  {
    uuid: '4c108fba-8f59-4066-b22e-3955217ae69f',
    name: 'Daniel',
    birthDate: new Date(),
  },
  {
    uuid: '0c80551b-664a-44d6-a0f7-07e52c051d9b',
    name: 'Juan',
    birthDate: new Date(),
  },
];

//Fake Db Queries
export const findUserById = (uuid: Uuid): Promise<User> =>
  new Promise((resolve) => {
    const user = users.find((aUser) => aUser.uuid == uuid);

    if (!user) throw new Error('User not found');

    setTimeout(() => {
      resolve(user);
    }, 50);
  });

export const find = (): Promise<User[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(users);
    }, 50);
  });

export const createUser = (
  name: string,
  birthDate: string
): Promise<User> =>
  new Promise((resolve) => {
    const date = new Date(birthDate);

    const newUSer = {
      uuid: v4.generate(),
      name,
      birthDate: date,
    };

    users.push(newUSer);

    setTimeout(() => {
      resolve(newUSer);
    }, 50);
  });
