import { IsEmail, IsNotEmpty, Max, MaxLength, MinLength } from 'class-validator';
import { User } from '../interface/user.interface.js';
export class LoginAuthDto implements User {
  
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @MinLength(6)
  @MaxLength(100)
  @IsNotEmpty()
  password: string;
}