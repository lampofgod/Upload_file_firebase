import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegComponent } from './component/reg/reg.component';
import { AppRouting } from './app.routing';
import { SharedsModule } from './shareds/shareds.module';

// import { AngularFireModule } from "@angular/fire";
// import { AngularFireStorageModule } from "@angular/fire/storage";
import {AngularFireModule} from 'angularfire2'
import {AngularFirestoreModule} from 'angularfire2/firestore'
import {AngularFireStorageModule} from 'angularfire2/storage'

import { AngularFireDatabaseModule } from "@angular/fire/database";
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';




import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewLoginComponent } from './component/new-login/new-login.component';
import { NewRegComponent } from './component/new-reg/new-reg.component';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
@NgModule({
  declarations: [
    AppComponent,
   LoginComponent,
   RegComponent,
    NewLoginComponent,
    NewRegComponent,
    DropZoneDirective,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
   SharedsModule,
  //  AngularFireModule.initializeApp(firebaseConfig ),
  AngularFireModule.initializeApp(environment.firebase ),
  AngularFirestoreModule,
  AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
