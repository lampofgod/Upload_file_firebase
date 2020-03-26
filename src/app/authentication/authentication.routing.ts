import {Routes,RouterModule} from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SettingComponent } from './component/dashboard/setting/setting.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UploadImgComponent } from './component/upload-img/upload-img.component';
import { DownloadImgComponent } from './component/farm/download-img.component';
import { ProcessingImgComponent } from './component/processing-img/processing-img.component';
import { MemberListComponent } from './component/member-list/member-list.component';
import { MemberCreateComponent } from './component/member-create/member-create.component';
//import { UploadFirebaseComponent } from './component/upload-img/upload-firebase/upload-firebase.component';
import { FarmCreateComponent } from './component/farm-create/farm-create.component';
import { TestFireComponent } from './component/test-fire/test-fire.component';
import { TestDataComponent } from './component/test-data/test-data.component';

const RouteLists: Routes =[

    {path:'',redirectTo:AuthURL.Upload,pathMatch:'full'},

    {path: AuthURL.Dashboard,component: DashboardComponent},
    {path: AuthURL.Setting,component: SettingComponent},
    {path: AuthURL.Profile,component: ProfileComponent},
        {path: AuthURL.Upload,component: UploadImgComponent
        // ,children:[ {path:'list',component:UploadFirebaseComponent}]
},
    {path: AuthURL.FarmList,component: DownloadImgComponent},
    {path: AuthURL.FarmCreate,component: FarmCreateComponent},
    
    {path: AuthURL.Processing,component: ProcessingImgComponent},
    {path: AuthURL.MemberList,component: MemberListComponent},
    {path: AuthURL.CreateMember,component: MemberCreateComponent},
    {path: 'editWiki/:id', component: MemberCreateComponent},
   // {path: 'editWiki/:id',redirectTo:AuthURL.CreateMember,pathMatch:'full'},
   // {path: 'memberList',redirectTo:AuthURL.MemberList,pathMatch:'full'},
   {path: AuthURL.TestFire,component: TestFireComponent},
   {path: AuthURL.TestData,component: TestDataComponent},
   


];

export const AuthenticationRouting = RouterModule.forChild(RouteLists);