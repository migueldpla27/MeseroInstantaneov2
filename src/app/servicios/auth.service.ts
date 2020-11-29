import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';
import { audit } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));

    });
     
  }

  logout(){
    this.AFauth.signOut().then(() =>{
      this.router.navigate(['login']);
    });
  }

}
