import { LoginAuthDto } from "./login-auth.dto.js";
declare const RegisterAuthDto_base: import("@nestjs/mapped-types").MappedType<Partial<LoginAuthDto>>;
export declare class RegisterAuthDto extends RegisterAuthDto_base {
    name: string;
}
export {};
