import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class AuthenService {
    private accessKey = 'accessToken';
    authState: any = null;
    userRef: AngularFireObject<any>;
    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private router: Router) {
        this.afAuth.authState.subscribe((auth) => {
        this.authState = auth
        });
      }

    get authenticated(): boolean {
        return this.authState !== null;
      }

    get currentUserId(): string {
        return this.authenticated ? this.authState.uid : '';
      }
    
    getCurrentLoggedIn() {
        this.afAuth.authState.subscribe(auth => {
          if (auth) {
            this.router.navigate(['/'])
          }
        });
      }

    // เก็บข้อมูลลง authen หน้า regis
    email(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then((user) => {
            this.authState = user
            this.updateUserData()
            this.router.navigate(['/'])
          })
          .catch(error => console.log(error));
      }
    // เก็บข้อมูลลง authen หน้า login
    emailLogin(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
          .then((user) => {
            this.authState = user
            this.updateUserData()
            this.router.navigate(['/'])
          })
          .catch(error => console.log(error));
      }
  


    private updateUserData(): void {
        const path = 'users/${this.currentUserId}'; // Endpoint on firebase
        const userRef: AngularFireObject<any> = this.db.object(path);
    const data = {
          email: this.authState.email,
          name: this.authState.displayName
        }
    userRef.update(data)
          .catch(error => console.log(error));
    }

    // กำหนดค่า access token ไว้ในความจำ browser
    setAuthenticated(accessToken: string): void {
        localStorage.setItem(this.accessKey, accessToken);
    }

    // ดึงค่า access token ในความจำ browser ออกมา
    getAuthenticated(): string {
        return localStorage.getItem(this.accessKey)
    }

    // ล้างค่า access token ที่อยู่ในความจำ browser
    clearAuthenticated(): void {
        localStorage.removeItem(this.accessKey);
    }

}