import { Component, OnInit, Input } from '@angular/core';
import { IChange } from './change.interface';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { ValidateService } from 'src/app/shareds/services/validate.service';
import { AccountService } from 'src/app/shareds/services/account.service';
import { AuthenService } from 'src/app/service/authen.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements IChange {
  
  constructor(
    private builder:FormBuilder,
    private alert: AlertService,
    private validate: ValidateService,
    private account: AccountService,
    private authen: AuthenService

  ) {
    this.initialCreateFormData();
   }


  @Input('modalRef') modalRef: BsModalRef;
  form: FormGroup;

  // เปลี่ยนรหัสผ่าน
  onSubmit() {
    if (this.form.invalid)
    return this.alert.something_wrong();
    this.account
    .onChangePassword(this.authen.getAuthenticated(), this.form.value)
    .then(user => {
        this.alert.notify('เปลี่ยนรหัสผ่านสำเร็จ', 'info');
        this.modalRef.hide();
    })
    .catch(err => this.alert.notify(err.Message));
console.log(this.form.value);
  }

   // สร้างฟอร์ม
   private initialCreateFormData() {
    this.form = this.builder.group({
        old_pass: ['',[Validators.required]],
        new_pass:['',[Validators.required,this.validate.isPassword]],
        cnew_pass:['',[Validators.required,this.validate.comparePassword('new_pass')]]
    });
}
 
}
