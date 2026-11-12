import { RegisterAuthDto } from './dto/register-auth.dto.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { AuthService } from './auth.service.js';
export declare class AuthController {
    private authservice;
    constructor(authservice: AuthService);
    registerUser(userObj: RegisterAuthDto): RegisterAuthDto;
    login(credenciales: LoginAuthDto): {
        token: string;
    };
}
