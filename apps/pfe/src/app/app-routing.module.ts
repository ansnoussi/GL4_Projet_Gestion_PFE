import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { StudentAddSubjectComponent } from './components/student/student-add-subject/student-add-subject.component';
import { UploaderRapportPFEComponent } from './components/student/uploader-rapport-pfe/uploader-rapport-pfe.component';
import { ListPfeComponent } from './components/student/list-pfe/list-pfe.component';



const routes: Routes = [
  {path: '',   redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent,
  children: [
    { path: '', redirectTo: 'add-user', pathMatch: 'full' },
    { path: 'add-user', component: AddUserComponent },
  ]
},
  {path: 'enseignant', component: EnseignantComponent},
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
