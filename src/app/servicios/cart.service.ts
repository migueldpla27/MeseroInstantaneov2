import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Plato {
  id: number;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Plato[] = [
    { id: 0, name: 'Carne Asada', price: 10.000, amount: 1 },
    { id: 1, name: 'Pollo Asada', price: 10.000, amount: 1 },
    { id: 2, name: 'Cerdo Asada', price: 10.000, amount: 1 },
    { id: 3, name: 'Pescado', price: 10.000, amount: 1 },
  ];

  private cart=[];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getPlatos(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addPlato(plato){

    let added= false;
    for (let p of this.cart){
      if (p.id === plato.id){
        p.amount +=1;
        added = true;
        break;
      }
    }
if (!added){

  this.cart.push(plato);
}
  this.cartItemCount.next(this.cartItemCount.value + 1);

}


  decreasePlato(plato){
    for (let [index, p] of this.cart.entries()){
      if(p.id === plato.id){
        p.amount -=1;
        if(p.amount == 0){
          this.cart.splice(index, 1);
        }
      }
    }

    this.cartItemCount.next(this.cartItemCount.value - 1);
    
  }
  removePlato(plato){

    for(let [index, p] of this.cart.entries()) {

      if(p.id === plato.id){
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
    
  }

  
}

