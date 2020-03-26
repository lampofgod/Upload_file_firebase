import { Injectable } from "@angular/core";
//import { IRegComponent, IReg } from 'src/app/component/reg/reg.interface';
import { resolve } from 'url';
//import { ILoginComponent, ILogin } from 'src/app/component/login/login.interface';
import { IProfile } from 'src/app/authentication/component/profile/profile.interface';
import { IChangePassword } from 'src/app/authentication/component/profile/change-password/change.interface';
import { ILogin } from 'src/app/component/login/login.interface';
import { IReg } from 'src/app/component/reg/reg.interface';

@Injectable({
    providedIn: 'root'
})
export class AccountService{
    mockUserItems: IAccount[] = [
        {
            id: 1,
            username: 'test',
            firstname:'test',

            lastname:'test',
            email: 'test@test.com',
            password: '111111',
            position: 'เกษตรกร',
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
            created: new Date(),
            updated: new Date()
        },
        {
            id: 2,
            username: 'test1',
            firstname:'test1',

            lastname:'test1',
            email: 'test1@test.com',
            password: '123456',
            position: 'ผู้ดูแลระบบ',
            img: null,
            created: new Date(),
            updated: new Date()
        }

    ];

    //  เปลี่ยนรหัสผ่านใหม่
    onChangePassword(accessToken: string, model: IChangePassword) {
        return new Promise((resolve, reject) => {
            const userProfile = this.mockUserItems.find(item => item.id == accessToken);
            if (!userProfile) return reject({ Message: 'ไม่มีข้อมูลผู้ใช้งานา' });
            if (userProfile.password !== model.old_pass) return reject({ Message: 'รหัสผ่านเดิมไม่ถูกต้อง' });
            userProfile.password = model.new_pass;
            userProfile.updated = new Date();
            resolve(userProfile);
        });
    }

     // แก้ไขข้อมูลส่วนตัว Update profile
     onUpdateProfile(accessToken: string, model: IProfile) {
        return new Promise((resolve, reject) => {
            const userProfile = this.mockUserItems.find(user => user.id == accessToken);
            if (!userProfile) return reject({ Message: 'ไม่มีผู้ใช้งานนี้ในระบบ' });
            userProfile.firstname = model.firstname;
            userProfile.lastname = model.lastname;
            userProfile.position = model.position;
            userProfile.username = model.username;

            userProfile.img = model.img;
            userProfile.updated = new Date();
            resolve(userProfile);
        });
    }

    //ดึงข้อมูลผู้ที่เข้าสู่ระบบจากToken
    getUserLogin(accessToken: string) {
        return new Promise<IAccount>((resolve, reject) => {
            const userLogin = this.mockUserItems.find(m => m.id == accessToken);
            if (!userLogin) return reject({ Message: 'accessToken ไม่ถูกต้อง' });
            resolve(userLogin);
        });
    } 

    //เข้าสู่ระบบ
    onLogin(model:ILogin){
        return new Promise<{accessToken:string}> ((resolve,reject)=>{
            //resolve(model);
            const userLogin = this.mockUserItems.find(item => item.email == model.email && item.password == model.password);
            if (!userLogin) return reject({ Message: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง' });
            resolve({
                accessToken: userLogin.id
            });
        });
    }
    //ลทบ
    onRegister(model: IReg){

        //console.log(model);
        return new Promise((resolve,reject)=>{

            model['id'] = Math.random();

            this.mockUserItems.push(model);


            resolve(model);
        });
    }

   
}
export interface IAccount{
    username:string;
    email:string;
    password:string;
    firstname:string;

    lastname:string;
    id?:any;
    position?:string;
    img?:string;
    created?:Date;
    updated?:Date;

}