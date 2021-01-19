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

/* Components */
import { LoginComponent } from './components/login/login.component';

/* HttpClientModule */
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { ItemPfeComponent } from './components/enseignant/item-pfe/item-pfe.component';
import { ItemEncadrementComponent } from './components/enseignant/item-encadrement/item-encadrement.component';
import { StudentComponent } from './components/student/student.component';
import { StudentAddSubjectComponent } from './components/student/student-add-subject/student-add-subject.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UploaderRapportPFEComponent } from './components/student/uploader-rapport-pfe/uploader-rapport-pfe.component';
import { ListPfeComponent } from './components/student/list-pfe/list-pfe.component';




@NgModule({
  declarations: [AppComponent, LoginComponent, AdminComponent, AddUserComponent, EnseignantComponent, ItemPfeComponent, ItemEncadrementComponent, StudentComponent, StudentAddSubjectComponent, HeaderComponent, SidenavListComponent, LayoutComponent, UploaderRapportPFEComponent, ListPfeComponent],
  imports: [BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
