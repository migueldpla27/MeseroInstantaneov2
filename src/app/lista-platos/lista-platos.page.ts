import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-lista-platos',
  templateUrl: './lista-platos.page.html',
  styleUrls: ['./lista-platos.page.scss'],
})
export class ListaPlatosPage implements OnInit {

  constructor(public navController: NavController ) { }

  ngOnInit() {
  }



}
