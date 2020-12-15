import { CartService } from "src/app/servicios/cart.service";
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { platform } from 'os';
import { Plato } from 'src/app/servicios/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Plato[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(plato){
    this.cartService.decreasePlato(plato);
  }

  increaseCartItem(plato){
    this.cartService.addPlato(plato);
  }

  removeCartItem(plato){
    this.cartService.removePlato(plato);
  }

  getTotal(){
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close(){
    this.modalCtrl.dismiss();
  }

  async checkout(){
      
    let alert = await this.alertCtrl.create({
      header: 'GRACIAS POR SU PEDIDO',
      message: 'Ahora mismo estamos haciendo tu pedido',
      buttons: ['OK']
    });

    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });

  }

}
