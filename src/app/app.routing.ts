import {Routes,RouterModule} from '@angular/router';
import { AppURL } from './app.url';
//import { LoginComponent } from './component/login/login.component';
//import { RegComponent } from './component/reg/reg.component';
import { NewLoginComponent } from './component/new-login/new-login.component';
import { NewRegComponent } from './component/new-reg/new-reg.component';
import { LoginComponent } from './component/login/login.component';
import { RegComponent } from './component/reg/reg.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component'


const RouteLists: Routes =[

    {path:'',redirectTo:AppURL.newLogin,pathMatch:'full'},
   {path:AppURL.Login,component:LoginComponent},
   {path:AppURL.Reg,component:RegComponent},
    //    {path:AppURL.newLogin,component:NewLoginComponent},
    // {path:AppURL.newReg,component:NewRegComponent},
    {path: 'up',component:FileUploadComponent},

    {path:AppURL.Authen,loadChildren:'./authentication/authentication.module#AuthenticationModule'}
];

export const AppRouting = RouterModule.forRoot(RouteLists);