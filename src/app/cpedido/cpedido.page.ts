import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { CartService } from '../servicios/cart.service';




@Component({
  selector: 'app-cpedido',
  templateUrl: './cpedido.page.html',
  styleUrls: ['./cpedido.page.scss'],
})
export class CpedidoPage implements OnInit {

  cart = [];
  platos = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef}) fab: ElementRef;

  constructor(private cartService: CartService, private modalCtrl: ModalController ) { }

  ngOnInit() {
    this.platos = this.cartService.getPlatos();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(plato){
    this.cartService.addPlato(plato);

  }

  async openCart(){
    

    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }
  
  
  
  animateCSS(animationName, keepAnimated = false){
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
  
      if(!keepAnimated){
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }
}
