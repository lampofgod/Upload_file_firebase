import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup } from '@angular/forms';


export interface IChange{
    modalRef:BsModalRef;
    form: FormGroup;

    onSubmit();
}

export interface IChangePassword{
    old_pass:string;
    new_pass:string;
}