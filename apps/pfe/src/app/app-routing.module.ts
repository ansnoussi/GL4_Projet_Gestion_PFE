import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { StudentAddSubjectComponent } from './components/student/student-add-subject/student-add-subject.component';
import { UploaderRapportPFEComponent } from './components/student/uploader-rapport-pfe/uploader-rapport-pfe.component';
import { ListPfeComponent } from './components/student/list-pfe/list-pfe.component';
import { AddStudentComponent } from './components/admin/add-student/add-student.component';
import { AddEnseignantComponent } from './components/admin/add-enseignant/add-enseignant.component';
import { AddAUComponent } from './components/admin/add-au/add-au.component';
import { PendingSubjectsComponent } from './components/admin/pending-subjects/pending-subjects.component';
import { PfesListComponent } from './components/admin/pfes-list/pfes-list.component';



const routes: Routes = [
  {path: '',   redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent,
  children: [
    {path:'', redirectTo: 'pending-subjects', pathMatch: 'full'},
    {path: 'add-student', component: AddStudentComponent},
    {path: 'add-professor', component: AddEnseignantComponent},
    {path: 'add-university-year', component: AddAUComponent},
    {path: 'pending-subjects', component: PendingSubjectsComponent},
    {path: 'accepted-pfes', component:PfesListComponent}
  ]
},
  {path: 'professor', component: EnseignantComponent},
  {path: 'student', component: StudentComponent,
  children: [
    {path: '', redirectTo: 'list-pfe',pathMatch:'full'},
    {path: 'add-subject', component: StudentAddSubjectComponent},
    {path:'uploader-rapport-pfe',component:UploaderRapportPFEComponent},
    {path:'list-pfe', component:ListPfeComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
