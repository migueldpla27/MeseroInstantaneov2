import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  OnSubmitLogin(){

    this.authService.login(this.email, this.password ).then(res =>{
      if(this.email === 'miguel@gmail.com'){
        this.router.navigate(['/home']);
      }else{
        this.router.navigate(['/cpedido']);
      }
      
    }).catch(err => alert('los datos ingresados son incorrectos o no existe el usuario'))

  }

}
