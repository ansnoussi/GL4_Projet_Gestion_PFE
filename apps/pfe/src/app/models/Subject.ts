import { Enterprise } from './Entreprise';
import { Student } from './Student';
import { EnterpriseManager } from './EnterpriseManager';


export class Subject{
  public title = '';
  public objective = '';
  public startDate = '';
  public endDate = '';
  public enterprise: Enterprise = new Enterprise();
  public student: Student = new Student();
  public enterpriseManager: EnterpriseManager = new EnterpriseManager();

  constructor() {
  }
}
