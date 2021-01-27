import { Enterprise } from './Entreprise';
import { Student } from './Student';
import { EnterpriseSupervisor } from './EnterpriseSupervisor';
import { Professor } from './Professor';


export class Subject{
  public title = '';
  public objective = '';
  public startDate = '';
  public endDate = '';
  public enterprise: Enterprise = new Enterprise();
  public student: Student = new Student();
  public enterpriseSupervisor: EnterpriseSupervisor = new EnterpriseSupervisor();
  public universitySupervisor: Professor = new Professor();

  constructor() {
  }
}
