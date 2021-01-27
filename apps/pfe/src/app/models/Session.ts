import { Professor } from './Professor';

export class Session{
  public sessionID: number;
  public date: string;
  public room: string;
  public juryPresident: Professor;

  constructor() {
  }
}
