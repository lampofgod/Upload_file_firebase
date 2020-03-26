import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/service/authen.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.css']
})
export class AuthNavComponent implements OnInit {

  constructor(
    private router:Router,
    private authen:AuthenService,
    private alert:AlertService
  ) { }

  ngOnInit() {
  }  

  AppURL = AppURL;
  AuthURL = AuthURL;

  // ออกจากระบบ
  onLogout() {
    this.alert.notify('ออกจากระบบสำเร็จ', 'info');
    this.authen.clearAuthenticated();
    //this.router.navigate(['/', AppURL.Login]);
}

}
