import { SetMetadata } from '@nestjs/common';
import { Role } from "@gl4/api-interfaces";
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);