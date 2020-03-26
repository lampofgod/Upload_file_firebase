import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './component/dashboard/setting/setting.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UploadImgComponent } from './component/upload-img/upload-img.component';
import { DownloadImgComponent } from './component/farm/download-img.component';
import { ProcessingImgComponent } from './component/processing-img/processing-img.component';
import { MemberListComponent } from './component/member-list/member-list.component';
import { MemberCreateComponent } from './component/member-create/member-create.component';
//import { UploadFirebaseComponent } from './component/upload-img/upload-firebase/upload-firebase.component';
import { ChangePasswordComponent } from './component/profile/change-password/change-password.component';
import { ShowComponent } from './component/processing-img/show/show.component';
import { FarmCreateComponent } from './component/farm-create/farm-create.component';
import { TestFireComponent } from './component/test-fire/test-fire.component';
import { TestDataComponent } from './component/test-data/test-data.component';
// import { AngularFireModule } from "@angular/fire";
// import { AngularFireStorageModule } from "@angular/fire/storage";
// import { AngularFireDatabaseModule } from "@angular/fire/database";
//import {environment  } from "../environments/environment";


@NgModule({
  declarations: [DashboardComponent, SettingComponent, ProfileComponent, 
    UploadImgComponent, DownloadImgComponent, ProcessingImgComponent, 
    MemberListComponent, MemberCreateComponent, 
    ChangePasswordComponent, ShowComponent, FarmCreateComponent, TestFireComponent, TestDataComponent],
  
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule,
     //AngularFireModule.initializeApp(environment.firebaseConfig ),
    //  AngularFireStorageModule,
    //  AngularFireDatabaseModule
  ]
})
export class AuthenticationModule { }
