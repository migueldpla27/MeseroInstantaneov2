import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public AuthService : AuthService) {}

    Onlogout(){
      this.AuthService.logout();

    }
}
