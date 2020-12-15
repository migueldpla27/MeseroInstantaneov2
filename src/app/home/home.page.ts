import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public AuthService : AuthService, public navCtrl: NavController) {}

    Onlogout(){
      this.AuthService.logout();

    }

  
}
