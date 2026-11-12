import { RegisterAuthDto } from './dto/register-auth.dto.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';
export declare class AuthController {
    registerUser(userObj: RegisterAuthDto): RegisterAuthDto;
    login(credenciales: LoginAuthDto): void;
}
