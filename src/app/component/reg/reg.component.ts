import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
//import { IRegisterComponent } from './register.interface';
import { IRegComponent } from './reg.interface';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { AccountService } from 'src/app/shareds/services/account.service';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/service/authen.service';
import { ValidateService } from 'src/app/shareds/services/validate.service';
import { FirsbaseServiceService } from 'src/app/service/firsbase-service.service';
import { NgForm, ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
//import { IregComponent } from './reg.interface';
//import { IRegComponent } from './reg.interface';
declare let $;
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})

export class RegComponent implements IRegComponent {
  user: any={};
  email: string;
  password: string;
  title: string;
  id: string;
  Url = AppURL;
  form:FormGroup;
 
  constructor(
    private firebaseService: FirsbaseServiceService, 
    private builder: FormBuilder,
    private alert:AlertService,
    private account:AccountService,
    private router: Router,
    private validate:ValidateService,
    private fb: FormBuilder,
    private auth: AuthenService
  ) { 

    this.initialCreateFormData();
    
  }
  ngIRegComponent() {
    this.buildForm();
    }

  buildForm(): void {
    this.form = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.pattern('^(?=.*[0–9])(?=.*[a-zA-Z])([a-zA-Z0–9]+)$'),
    Validators.minLength(6),
    Validators.maxLength(25)])
    });
    }

    signup(): void {
        this.auth.email(this.form.value.email, this.form.value.password)
        console.log("zzzzzzzz")
        }
  //ลทบ.
  onSubmit() {
     if(this.form.invalid)
     return this.alert.something_wrong();
       //console.log(this.form.value);

       //ส่งข้อมูล
       this.account
       .onRegister(this.form.value) //ส่งค่า
       .then(res =>{
         this.alert.notify('ลงทะเบียนสำเร็จ','info');
         this.router.navigate(['/',AppURL.Login]);
       })
       .catch(err => this.alert.notify(err.Message)); //ถ้าไม่ได้แจ้งเตือนเด้ง    
  }
  //upload ข้อมูลลง firebase หลังจาก register
  addDetailUser(data: NgForm){
    if (this.id) {
      this.firebaseService.editDetailUser(this.id, data.value).then(this.goToHome);
    } else {
      this.firebaseService.addDetailUser(data.value).then(this.goToHome);
    }
  }
  
  goToHome = () => {
    this.router.navigate(['auth','memberList']);
  }

 //สร้างฟอร์ม
  private initialCreateFormData(){
   
    this.form = this.builder.group({
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,this.validate.isPassword]],
      cpassword:['',[Validators.required,this.validate.comparePassword('password')]]


    });

  }

// function saveOnClick(){
//     var username=document.getElementById('username');
//     var email=document.getElementById('email');
//     var password=document.getElementById('password');
//     insertData(username.value,email.value,password.value);
//     // var firebaseRef=firebase.database().ref();
//     // firebaseRef.child("Admin").set("Chadjira");
// }
// window.onload=function(){
//     showData();
// }
// function showData(){
//     var firebaseRef=firebase.database().ref("DetailUser"); 
//     firebaseRef.once('value').then(function(dataSnapshot){
//         console.log(dataSnapshot.val());   
//     });
// }
// function insertData(username,email,password){
//     var firebaseRef=firebase.database().ref("DetailUser");
//     firebaseRef.push({
//         username:username,
//         email:email,
//         password:password,
//     });
//     console.log("Insert Success");
//     showData();

// }

  // private comparePassword(paawordField:string){
  //     return function (confirm_password: AbstractControl){

  //       if(!confirm_password.parent)return;
  //       const password =confirm_password.parent.get(paawordField);

  //       const passwordsubscripe=password.valueChanges.subscribe(() =>{
  //         confirm_password.updateValueAndValidity();
  //         passwordsubscripe.unsubscribe();
  //       });
  //       if(confirm_password.value=== password.value)
  //         return;
  //       return{compare:true};
      
  //     }
  // }
}

// export class RegComponent implements IregComponent {
  
//   constructor(
//     private builder:FormBuilder

//   ) { 

//     this.initialCreateFormData();
//   }
 
//   Url = AppURL;
//   form: FormGroup;

//   //ลทบ
//   onSubmit() {
//    console.log(this.form.value);
//   }
//  //สร้างฟอร์ม
//   private initialCreateFormData(){
//     this.form = this.builder.group({

     
//       username:[],
//       email:[],
//       password:[],
//       cpassword:[]
//     });
//   }
 

 
//   }



