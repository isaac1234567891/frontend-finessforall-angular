import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts = []
  private localStoragekey = 'cart'
  constructor() { }

  addToCart(product: any){
    console.log(product);

  }

  private localCartFromtLocalStorage(){
    const dataCart = localStorage.getItem(this.localStoragekey);
    if(dataCart) {
      this.cartProducts = JSON.parse(dataCart)
    }
  }
}
