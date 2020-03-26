import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BsDropdownModule,ModalModule} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AuthNavComponent } from './component/auth-nav/auth-nav.component';
import { AuthSidebarComponent } from './component/auth-sidebar/auth-sidebar.component';
import { AuthContentComponent } from './component/auth-content/auth-content.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { AccountService } from './services/account.service';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
//import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { AngularFireDatabaseModule } from "@angular/fire/database";
import { ValidateService } from './services/validate.service';
import { FirsbaseServiceService } from '../service/firsbase-service.service';
//import { firebaseConfig } from './../environments/firebase.config';


//import { environment } from "../app.module";

import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [AuthNavComponent, AuthSidebarComponent, AuthContentComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig ),
    //AngularFireModule.initializeApp(firebaseConfig ),
    AngularFireStorageModule,
    //AngularFireStorage,
    AngularFireDatabaseModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    
  ],
  exports:[
    AuthNavComponent,
    AuthSidebarComponent,
    AuthContentComponent,
    BsDropdownModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    BsDatepickerModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    
    
  ],
  providers:[
    AlertService,
    //AccountService,
    ValidateService,
    FirsbaseServiceService
  ]
})
export class SharedsModule { }
