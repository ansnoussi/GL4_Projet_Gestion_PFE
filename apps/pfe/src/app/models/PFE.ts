import { Professor } from './Professor';
import { Subject } from './Subject'

export class PFE{
  public Subject: Subject;
  public examiner: Professor;
  public juryPresident: Professor;
  public presentationDate: string;
  public presentationTime: string;
  public room: number;

  constructor() {
  }
}
