export enum Role {
    SUPER_ADMIN = 'SUPERADMIN',
    ADMIN = 'ADMIN',
    ENSEIGNANT = 'ENSEIGNAT',
    ETUDIANT = 'ETUDIANT'
}

export class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly role: Role
}

export class LoginUserDto {
    readonly email: string;
    readonly password: string;
}