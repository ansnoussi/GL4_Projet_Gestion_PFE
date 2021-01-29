import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* HttpClientModule */
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { LoginComponent } from './components/login/login.component';
import { StudentAddSubjectComponent } from './components/student/student-add-subject/student-add-subject.component';
import { AdminComponent } from './components/admin/admin.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { ItemPfeComponent } from './components/enseignant/item-pfe/item-pfe.component';
import { ItemEncadrementComponent } from './components/enseignant/item-encadrement/item-encadrement.component';
import { StudentComponent } from './components/student/student.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UploaderRapportPFEComponent } from './components/student/uploader-rapport-pfe/uploader-rapport-pfe.component';
import { ListPfeComponent } from './components/student/list-pfe/list-pfe.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchComponent } from './components/search/search.component';
import { AddAUComponent } from './components/admin/add-au/add-au.component';
import { AddEnseignantComponent } from './components/admin/add-enseignant/add-enseignant.component';
import { AddStudentComponent } from './components/admin/add-student/add-student.component';
import { AdminSidenavComponent } from './components/admin/navigation/admin-sidenav/admin-sidenav.component';
import { AddSessionComponent } from './components/admin/add-session/add-session.component';
import { PendingSubjectsComponent } from './components/admin/pending-subjects/pending-subjects.component';
import { ItemPendingSubjectComponent } from './components/admin/pending-subjects/item-pending-subject/item-pending-subject.component';
import { ReasonComponent } from './components/admin/pending-subjects/reason/reason.component';
import { PfesListComponent } from './components/admin/pfes-list/pfes-list.component';
import { PfeItemAdminComponent } from './components/admin/pfes-list/pfe-item-admin/pfe-item-admin.component';
import { SessionsListComponent } from './components/admin/sessions-list/sessions-list.component';
import { SessionItemComponent } from './components/admin/sessions-list/session-item/session-item.component';
import { ImportDataFromFileComponent } from './components/admin/import-data-from-file/import-data-from-file.component';
import { AddSubjectToSessionComponent } from './components/admin/pfes-list/add-subject-to-session/add-subject-to-session.component';



@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    AdminComponent,
    EnseignantComponent,
    ItemPfeComponent,
    ItemEncadrementComponent,
    StudentComponent,
    StudentAddSubjectComponent,
    HeaderComponent,
    SidenavListComponent,
    LayoutComponent,
    UploaderRapportPFEComponent,
    ListPfeComponent, SearchComponent, AddAUComponent, AddEnseignantComponent, AddStudentComponent, AdminSidenavComponent, AddSessionComponent, PendingSubjectsComponent, ItemPendingSubjectComponent, ReasonComponent, PfesListComponent, PfeItemAdminComponent, SessionsListComponent, SessionItemComponent, ImportDataFromFileComponent, AddSubjectToSessionComponent],
  imports: [BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule, MatNativeDateModule,
    FlexLayoutModule, MatProgressBarModule, MatDialogModule,MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
