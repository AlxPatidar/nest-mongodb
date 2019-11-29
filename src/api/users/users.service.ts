import { Model } from 'mongoose';
import * as Bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  private readonly users: User[];

  // Find user details with email id
  async findOne(email: string): Promise<User | null> {
    return await this.userModel.findOne(
      { email },
      { createdAt: 0, updatedAt: 0 }
    );
  }
  // Create user with name, email and password
  async registerUser(payload): Promise<User> {
    const salt = await Bcrypt.genSalt(10);
    const password = await Bcrypt.hash(payload.password, salt);
    const user = await this.userModel.create({
      password,
      email: payload.email,
      name: payload.name,
    });
    user.password = null;
    return user;
  }
}
