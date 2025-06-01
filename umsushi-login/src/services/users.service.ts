import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  async create(username: string, password: string): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser: User = {
      id: this.idCounter++,
      username,
      password: hashedPassword,
    };

    this.users.push(newUser);

    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }
}
