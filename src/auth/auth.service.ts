import * as Bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import {
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
  ResponseData,
} from './interfaces/auth.interfaces';
import { User } from '../users/interfaces/user.interfaces';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  // Check email and password and return user details with token
  async login(credential: LoginRequest): Promise<LoginResponse> {
    const user = await this.usersService.findOne(credential.email);
    if (user) {
      const passwordCheck = await Bcrypt.compare(
        credential.password,
        user.password
      );
      if (passwordCheck) {
        const payload = {
          email: user.email,
          userId: user._id,
          name: user.name,
        };
        // Create token based on role details
        const token = this.jwtService.sign(payload);
        user.password = null;
        return {
          success: true,
          message: 'Logged-in successfully.',
          token,
          data: user,
        };
      } else {
        return {
          success: false,
          token: '',
          message: 'Wrong Password. Please try again.',
          data: {},
        };
      }
    } else {
      return {
        success: false,
        message: 'Login email not found. Please register.',
        token: '',
        data: {},
      };
    }
  }
  // Register user with email id and basic information
  async registration(payload: RegistrationRequest): Promise<ResponseData> {
    let user: User = await this.usersService.findOne(payload.email);
    if (!user) {
      user = await this.usersService.registerUser(payload);
      return {
        success: true,
        message: 'User created successfully.',
        data: user,
      };
    } else {
      return {
        success: false,
        message: 'User already exists with this email address!!!',
        data: {},
      };
    }
  }
}
