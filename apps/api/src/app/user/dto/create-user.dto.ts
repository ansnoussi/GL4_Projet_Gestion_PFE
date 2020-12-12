import { Role } from "../role.enum";

export class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly role: Role
}