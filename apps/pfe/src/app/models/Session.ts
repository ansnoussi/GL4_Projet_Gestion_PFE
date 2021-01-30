import { Professor } from './Professor';
import { Speciality } from './Speciality';

export class Session{
  public sessionID: number;
  public speciality: Speciality;
  public date: string;
  public room: string;
  public juryPresident: Professor;

  constructor() {
  }
}
