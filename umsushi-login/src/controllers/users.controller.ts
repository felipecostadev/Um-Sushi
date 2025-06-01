import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<User> {
    return this.usersService.create(username, password);
  }

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }
}
