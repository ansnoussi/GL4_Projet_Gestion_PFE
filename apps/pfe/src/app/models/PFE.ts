import { Professor } from './Professor';
import { Subject } from './Subject'
import { Session } from './Session';

export class PFE{
  public subject: Subject;
  public session: Session;
  public examiner: Professor;
  public presentationTime: string;

  constructor() {
  }
}
