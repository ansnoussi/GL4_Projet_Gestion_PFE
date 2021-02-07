import { Injectable } from '@nestjs/common';
import { Message } from '@gl4/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to backend!' };
  }
}
