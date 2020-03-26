import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { ILoginComponent } from './login.interface';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AccountService } from 'src/app/shareds/services/account.service';
import { AuthenService } from 'src/app/service/authen.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponent {

  Url= AppURL;
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private account:AccountService,
    private authen:AuthenService
  ) {

    this.initialCreateFormData();
    authen.getCurrentLoggedIn();
    //console.log(this.authen.getAuthenticated());
    
   }
    
   ngILoginComponent() {
    this.buildForm();
    }
    buildForm(): void {
      this.form = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [ Validators.pattern('^(?=.*[0–9])(?=.*[a-zA-Z])([a-zA-Z0–9]+)$'),
      Validators.minLength(6),
      Validators.maxLength(25)
      ])
      });
      }


  login(): void {
      this.authen.emailLogin(this.form.value.email, this.form.value.password)
      }

      
  //เข้าสู่ระบบ
  onSubmit(): void {
    if(this.form.invalid)
      return this.alert.something_wrong();
      this.account
      .onLogin(this.form.value)
      .then(res =>{
        //เก็บ session
        this.authen.setAuthenticated(res.accessToken);
        //alert redirect หน้า
        this.alert.notify('เข้าสู่ระบบ', 'info'); //console.log(res);
        this.router.navigate(['/',AppURL.Authen,AuthURL.Upload]);
        this.authen.emailLogin(this.form.value.email, this.form.value.password)
        
      })
      .catch(err => this.alert.notify(err.Message));
     
    //console.log(this.form.value);
  }

  //สร้างฟอร์ม
  private initialCreateFormData(){
    this.form = this.builder.group({

      email:['',Validators.required],
      password:['',Validators.required],
      remember:[true]
    });
  }

}
