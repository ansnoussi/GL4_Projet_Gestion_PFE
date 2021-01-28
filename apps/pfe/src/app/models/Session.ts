import { Professor } from './Professor';

export class Session{
  public sessionID: number;
  public speciality: string;
  public date: string;
  public room: string;
  public juryPresident: Professor;

  constructor() {
  }
}
